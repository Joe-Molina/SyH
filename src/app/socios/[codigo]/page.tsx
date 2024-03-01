import React from 'react'
import {prisma} from './../../libs/prisma'
import { TabsDemo } from '@/app/components/socio/tab'

const socioData = async (codigo: string) => {

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
    <div>
      <TabsDemo data={data}/>
    </div>
  )
}

export default socioPage