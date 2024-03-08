import React from 'react'
import {prisma} from './../../libs/prisma'
import { TabsDemo } from '@/app/components/socio/tab'
import { loginIsRequiredServer } from '@/app/api/auth/[...nextauth]/route'

const socioData = async (codigo: string) => {
  await loginIsRequiredServer()

  const socio = await prisma.socios.findFirst({
    where: {
      codigo
    }
  })

  const familiares = await prisma.familiares.findMany({
    where: {
      codigo_socios: codigo
    }
  })



  return {socio, familiares}
}

async function socioPage({ params: { codigo } }: { params: { codigo: string } }) {


  const data = await socioData(codigo)


  return (
    <div className=''>
      <TabsDemo data={data}/>
    </div>
  )
}

export default socioPage