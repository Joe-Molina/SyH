import React from 'react'
import Pruebass from '../components/pruebas/pruebas'
import { prisma } from '@/app/libs/prisma'

const BuscarFamiliares = async (codigo: string) => {

    const familiares = await prisma.familiares.findMany({
            where: {
                codigo_socios: codigo
                }
            })

        return familiares
    }


async function Pruebas() {

      const familiares = await BuscarFamiliares('000260')

  return (
    <Pruebass  data={familiares}/>
  )
}

export default Pruebas