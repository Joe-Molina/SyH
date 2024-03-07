import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
   

function InfoFacturas(datosFacturas: any) {

    const datosF =  datosFacturas.datosFacturas

  return (
   <div className='max-h-[470px] overflow-auto'>
     <Table>
    <TableCaption>Lista de facturas recientes</TableCaption>
    <TableHeader>
      <TableRow className=''>
        <TableHead className="w-[100px]">fecha</TableHead>
        <TableHead >Nombre</TableHead>
        <TableHead>tipo docmento</TableHead>
        <TableHead>Proveedor</TableHead>
        <TableHead>cantidad</TableHead>
        <TableHead>emisor</TableHead>
        <TableHead className="text-right">Monto total</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>

      {
        datosF.map((dato: any, index: any) => (
          <TableRow key={index}>
            <TableCell>{dato.fechadoc.toLocaleDateString()}</TableCell>
            <TableCell>{dato.nombre + dato.notas}</TableCell>
            <TableCell>{dato.tipodoc}</TableCell>
            <TableCell>{dato.proveedor}</TableCell>
            <TableCell>{dato.cantidad}</TableCell>
            <TableCell >{dato.emisor}</TableCell>
            <TableCell className="text-right">{dato.montototal}</TableCell>
          </TableRow>
        ))
      }

    </TableBody>
  </Table>
   </div>
  )
}

export default InfoFacturas