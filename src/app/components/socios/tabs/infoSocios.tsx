import React from 'react'
import {
    CardContent,
  } from "@/components/ui/card"

  
      const DatosP = (dato: any, nombre: any) => {
        
          return(
            <p className="py-1 px-3 text-sm mx-2 border-b border-b-gray-200"> <b className="bg-gray-200 rounded-lg px-2 py-1 text-gray-800">{dato.nombre}</b> {dato.dato}</p>
          )
        }

function InfoSocios(dataSocios: any) {

    const datos = dataSocios.dataSocios

    console.log(datos)

  return (
    <CardContent className="space-y-2 my-1 flex flex-col justify-center-center border-b border-b-gray-200">
        <DatosP nombre="accion n°" dato={datos.codigo} />
        <DatosP nombre="direccion" dato={datos.direccion}/>
        <DatosP nombre="estatus" dato={datos.estatus}/>
        <DatosP nombre="rif" dato={datos.nrorif}/>
        <DatosP nombre="telefono" dato={datos.telefonos}/>
        <DatosP nombre="nota" dato={datos.nota}/>
        <DatosP nombre="email" dato={datos.email}/>
        <DatosP nombre="wwwcli" dato={datos.wwwcli}/>
        <DatosP nombre="tipo" dato={datos.tipo}/>
        <DatosP nombre="referencia 1" dato={datos.referenc1}/>
        <DatosP nombre="referencia 2" dato={datos.referenc2}/>
        <DatosP nombre="fax" dato={datos.numerofax}/>
      <DatosP nombre="persona de contacto" dato={datos.perscont}/>
      <DatosP nombre="direccion de cobro" dato={datos.direccobro}/>
      <DatosP nombre="direccion de envio" dato={datos.direcenvio}/>
      <DatosP nombre="genero" dato={datos.sexo}/>
      <DatosP nombre="nacionalidad" dato={datos.nacionalida}/>
      <DatosP nombre="estado civil" dato={datos.edocivil}/>
      <DatosP nombre="telefono de habitacion" dato={datos.telhabitaci}/>
      <DatosP nombre="celular" dato={datos.celular}/>
      <DatosP nombre="empresa donde trabaja" dato={datos.trabempresa}/>
      <DatosP nombre="telefono del trabajo" dato={datos.trabtelefon}/>
      <DatosP nombre="telefono movil" dato={datos.telefono_movil}/>
      <DatosP nombre="n° carnet" dato={datos.carnet}/>
      <DatosP nombre="exonerado" dato={datos.exonerdo}/>
      <DatosP nombre="fecha de exoneracion" dato={datos.fch_exon ? datos.fch_exon.toString() : 'sin fecha'}/>
      <DatosP nombre="fecha de vencimiento de la accion" dato={datos.fin? datos.fin.toString() :'sin fecha'}/>
      <DatosP nombre="fecha de emision del carnet" dato={datos.feemicrnt? datos.feemicrnt.toString() : 'sin fecha'}/>
      <DatosP nombre="fecha de vencimiento del carnet" dato={datos.fevnccrnt? datos.fevnccrnt.toString() : 'sin fecha'}/>
      <DatosP nombre="fecha de nacimiento" dato={datos.fechanac? datos.fechanac.toString() : 'sin fecha'}/>
          </CardContent>
  )
}

export default InfoSocios