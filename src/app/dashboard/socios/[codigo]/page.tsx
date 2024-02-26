import React from 'react'
import {prisma} from './../../../libs/prisma'

const socio = async (codigo: string) => {

  const socio = await prisma.socios.findFirst({
    where: {
      codigo
    }
  })

  return socio
}

async function socioPage({ params: { codigo } }: { params: { codigo: string } }) {

  const socioo = await socio(codigo)

  console.log(socioo)

  return (
    <div>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-900'>nombre: {socioo?.nombre}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>n° accion: {socioo?.codigo}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>cedula: {socioo?.cedula}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>rif: {socioo?.nrorif}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>direccion: {socioo?.direccion}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>telefono: {socioo?.telefonos}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>estatus: {socioo?.estatus}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>nota: {socioo?.nota}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>email: {socioo?.email}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>wwwcli: {socioo?.wwwcli}</p>
      <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>tipo: {socioo?.tipo}</p>
    </div>
  )
}

export default socioPage