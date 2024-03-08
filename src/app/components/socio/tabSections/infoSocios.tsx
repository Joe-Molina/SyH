import React from 'react'
import {
    CardContent,
  } from "@/components/ui/card"

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
const DatosP = (dato: any) => {
        
          return(
            <div className="  text-sm mx-2  flex justify-evenly items-start  px-2 py-1 my-2 flex-col"> 
            <b className="">{dato.nombre}</b> 
            <p className=' flex items-center text-start overflow-auto border px-2 py-1   rounded-sm'> {dato.dato != undefined? dato.dato : "no encontrado"}</p>
            </div>
          )
    }

function InfoSocios(dataSocios: any) {

    const datos = dataSocios.dataSocios

    const status = (estatus: any) => {

        if(estatus == 1) {
          return "Activo"
        } else if (estatus == 2) {
          return "Disfrute"
        } else if (estatus) {
          return "Suspendido"
        }
    }

    const tipo = (tipo: any) => {

      if(tipo == "01") {
        return "ORDINARIO"
      } else if (tipo == "08") {
        return "AFILIADO"
      } else if (tipo == "09") {
        return "DISFRUTE"
      }
      else if (tipo == "10") {
        return "OPERACIONES CIM"
      }
  }

  const exonerado = (tipo: any) => {

    if(tipo == "0") {
      return "NO"
    } else {return "SI"}
  }
    const direccion = datos.foto != null? datos.foto : '';
  

  const partes = direccion?.split('\\');
  const foto = partes != undefined? partes[partes.length - 1] : "" ;

  console.log('exonerado')
  console.log(datos.exonerado)
  console.log('datos')

  return (

    <CardContent className=" my-1 flex flex-row flex-wrap justify-start">
      <article className=' w-3/5 flex flex-wrap border-r mt-4' >
        <div className='w-full flex  px-4'>
       <img src={ (foto != '')?'http://cimnet.com/fotocarnet/' + foto : 'error'} onError={(e) => {
         e.target.src = '/avataricon.png'; }} className='w-40 h-40 rounded-md border' />
         <div className='ml-10' >
         <h2 className='font-bold text-3xl '>{datos.nombre}</h2>
         <div className='flex flex-wrap'>
         <DatosP nombre="accion n°" dato={datos.codigo} />
         <DatosP nombre="cedula" dato={datos.cedula} />
       <DatosP nombre="n° carnet" dato={datos.carnet}/>
         <DatosP nombre="rif" dato={datos.nrorif}/>
       <DatosP nombre="nacionalidad" dato={datos.nacionalida}/>
            <DatosP nombre="fecha de nacimiento" dato={datos.fechanac? datos.fechanac.toLocaleDateString() : 'sin fecha'} />

         </div>

         </div>

        </div>
         <DatosP nombre="fecha inicio" dato={datos.fecha ? datos.fecha.toLocaleDateString() : 'sin fecha'}/>
         <DatosP nombre="fecha fin" dato={datos.fin? datos.fin.toLocaleDateString() :'no aplica'}/>
         <DatosP nombre="tipo" dato={tipo(datos.tipo)}/>
         <DatosP nombre="estatus" dato={status(datos.estatus)}/>
         <DatosP nombre="referencia" dato={datos.referenc2}/>
       <DatosP nombre="estado civil" dato={datos.edocivil}/>
       <DatosP nombre="empresa donde trabaja" dato={datos.trabempresa}/>
       <DatosP nombre="exonerado" dato={exonerado(datos.exonerado)}/>
            {datos.exonerado == 1? <DatosP nombre="fecha de exoneracion" dato={datos.fch_exon ? datos.fch_exon.toLocaleDateString() : 'sin fecha'}/> : ''}
         <DatosP nombre="nota" dato={datos.nota}/>
            <DatosP nombre="fecha de vencimiento del carnet" dato={datos.fevnccrnt? datos.fevnccrnt.toLocaleDateString() : 'sin fecha'}/>
            <DatosP nombre="fecha de emision del carnet" dato={datos.feemicrnt? datos.feemicrnt.toLocaleDateString() : 'sin fecha'}/>

      </article>
      <article className='flex flex-wrap w-2/5 pl-3 mt-4'>
         <DatosP nombre="wwwcli" dato={datos.wwwcli}/>
         <DatosP nombre="email" dato={datos.email}/>
         <DatosP nombre="fax" dato={datos.numerofax}/>
         <DatosP nombre="telefono" dato={datos.telefonos}/>
      <DatosP nombre="telefono del trabajo" dato={datos.trabtelefon}/>
      <DatosP nombre="telefono movil" dato={datos.telefono_movil}/>
      <DatosP nombre="telefono de habitacion" dato={datos.telhabitaci}/>
      <DatosP nombre="celular" dato={datos.celular}/>
      <DatosP nombre="persona de contacto" dato={datos.perscont}/>
        <DatosP nombre="direccion" dato={datos.direccion}/>
      <DatosP nombre="direccion de envio" dato={datos.direcenvio}/>
      <DatosP nombre="direccion de cobro" dato={datos.direccobro}/>
      </article>
          </CardContent>
  )
}

export default InfoSocios