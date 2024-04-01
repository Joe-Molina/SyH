import React from 'react'
import { prisma } from './../libs/prisma'
import { loginIsRequiredServer } from '../api/auth/[...nextauth]/route'
import { VerFacturasButton } from '../components/header/VerFacturasButton'

async function facturasPage() {

  await loginIsRequiredServer()


  return (
    <div className='m-4'>
      <h1 className="text-3xl font-bold m-3">Buscar Facturas</h1>
      <div className='w-72'><VerFacturasButton/></div>
    </div>
  )
}

export default facturasPage