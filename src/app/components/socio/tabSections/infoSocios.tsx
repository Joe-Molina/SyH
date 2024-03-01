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

  
const DatosP = (dato: any, nombre: any) => {
        
          return(
            <div className="  text-sm mx-2  flex justify-evenly items-start  px-2 py-1 my-2 flex-col"> 
            <b className="">{dato.nombre}</b> 
            <p className=' flex items-center text-start overflow-auto border p-2 '> {dato.dato != undefined? dato.dato : "no encontrado"}</p>
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

  return (
    <CardContent className=" my-1 flex flex-row flex-wrap border-b border-b-gray-200 justify-start">
        <DatosP nombre="accion n°" dato={datos.codigo} />
        <DatosP nombre="cedula" dato={datos.cedula} />
        <DatosP nombre="estatus" dato={status(datos.estatus)}/>
        <DatosP nombre="rif" dato={datos.nrorif}/>
        <DatosP nombre="telefono" dato={datos.telefonos}/>
        <DatosP nombre="email" dato={datos.email}/>
        <DatosP nombre="wwwcli" dato={datos.wwwcli}/>
        <DatosP nombre="tipo" dato={datos.tipo}/>
        <DatosP nombre="Accion" dato={datos.referenc1}/>
        <DatosP nombre="referencia" dato={datos.referenc2}/>
        <DatosP nombre="fax" dato={datos.numerofax}/>
      <DatosP nombre="genero" dato={datos.sexo}/>
      <DatosP nombre="nacionalidad" dato={datos.nacionalida}/>
      <DatosP nombre="estado civil" dato={datos.edocivil}/>
      <DatosP nombre="empresa donde trabaja" dato={datos.trabempresa}/>
      <DatosP nombre="n° carnet" dato={datos.carnet}/>
      <DatosP nombre="exonerado" dato={datos.exonerdo}/>
        <DatosP nombre="nota" dato={datos.nota}/>
      <DatosP nombre="direccion de envio" dato={datos.direcenvio}/>
      <DatosP nombre="direccion de cobro" dato={datos.direccobro}/>
        <DatosP nombre="direccion" dato={datos.direccion}/>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
        <AccordionTrigger>Contactos</AccordionTrigger>
          <AccordionContent>
      <DatosP nombre="telefono del trabajo" dato={datos.trabtelefon}/>
      <DatosP nombre="telefono movil" dato={datos.telefono_movil}/>
      <DatosP nombre="telefono de habitacion" dato={datos.telhabitaci}/>
      <DatosP nombre="celular" dato={datos.celular}/>
      <DatosP nombre="persona de contacto" dato={datos.perscont}/>
          </AccordionContent>
          </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
        <AccordionTrigger>Fechas</AccordionTrigger>
          <AccordionContent>
            <DatosP nombre="fecha de exoneracion" dato={datos.fch_exon ? datos.fch_exon.toLocaleDateString() : 'sin fecha'}/>
            <DatosP nombre="fecha de vencimiento de la accion" dato={datos.fin? datos.fin.toLocaleDateString() :'sin fecha'}/>
            <DatosP nombre="fecha de emision del carnet" dato={datos.feemicrnt? datos.feemicrnt.toLocaleDateString() : 'sin fecha'}/>
            <DatosP nombre="fecha de vencimiento del carnet" dato={datos.fevnccrnt? datos.fevnccrnt.toLocaleDateString() : 'sin fecha'}/>
            <DatosP nombre="fecha de nacimiento" dato={datos.fechanac? datos.fechanac.toLocaleDateString() : 'sin fecha'} />
          </AccordionContent>
          </AccordionItem>
      </Accordion>
          </CardContent>
  )
}

export default InfoSocios