import React from 'react'
import {prisma} from './../../libs/prisma'
import { TabsDemo } from '@/app/components/socio/tab'
import { loginIsRequiredServer } from '@/app/api/auth/[...nextauth]/route'
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
 import Back from '@/app/components/header/BackButton'  

async function FacturaSocioPage({ params: { codigo } }: { params: { codigo: string } }) {
  
  await loginIsRequiredServer()

    const socio = await prisma.socios.findFirst({
        where: {
            codigo
        },
        select: {
            nombre: true
        }
    })

    const facturas = await prisma.facturas.findMany({
        where: {
          proveedor: codigo
        },
        select: {
          nombre: true,
          nombrecli: true,
          notas: true,
          tipodoc: true,
          proveedor: true,
          emisor: true,
          cantidad: true,
          montototal: true,
          fechadoc: true,
          estatusdoc: true,
          documento: true
        },
        orderBy: {
          fechadoc: 'desc' // 'desc' for descending order
        },
        take: 100
    
      })

    console.log(facturas)



  return (
    <div className='z-10 overflow-auto m-4 border border-zinc-100 rounded-md mb-3'>
    <Back/>
     <h2 className='p-3 text-3xl font-bold'>Facturas de {facturas[0]?.nombrecli}</h2>   
     <Table>
    <TableCaption>Lista de facturas recientes</TableCaption>
    <TableHeader>
      <TableRow className=''>
        <TableHead className="w-[100px]">fecha</TableHead>
        <TableHead >Documento</TableHead>
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
        facturas.map((dato: any, index: any) => (
          dato.tipodoc == "FAC"? 
          <TableRow key={index} className={dato.estatusdoc != 2? 'bg-red-400 text-white' : '' }>
            <TableCell>{dato.fechadoc.toLocaleDateString()}</TableCell>
            <TableCell>{dato.documento}</TableCell>
            <TableCell>{dato.nombre + dato.notas}</TableCell>
            <TableCell>{dato.tipodoc}</TableCell>
            <TableCell>{dato.proveedor}</TableCell>
            <TableCell>{dato.cantidad}</TableCell>
            <TableCell >{dato.emisor}</TableCell>
            <TableCell className="text-right">{dato.montototal}</TableCell>
          </TableRow>

          :

          ''
            
          
        ))
      }

    </TableBody>
  </Table>
   </div>
  )
}

export default FacturaSocioPage