import React from 'react'
import { prisma } from './../libs/prisma'
import { loginIsRequiredServer } from '../api/auth/[...nextauth]/route'

async function facturasPage() {

  await loginIsRequiredServer()


  return (
    <div>
      holas
    </div>
  )
}

export default facturasPage