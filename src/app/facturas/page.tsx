import React from 'react'
import { loginIsRequiredServer } from '../api/auth/[...nextauth]/route'

async function facturasPage() {

  await loginIsRequiredServer()
  return (
    <div>facturasPage</div>
  )
}

export default facturasPage