'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export function VerFacturasButton() {

  const [search, setSearch] = useState('')

  const router = useRouter()

  const searcher = (e: any) => {
    setSearch(e.target.value)
    console.log(search)
}


  return (
    <div className='flex bg-black p-2 text-white rounded-lg'>
      <input onChange={searcher} className='w-32 mr-3 text-black rounded-sm' type="text" placeholder='num accion...'/>
      <button onClick={() => {router.push('/facturas/' + search)}} className='shadow-sm'> buscar facturas </button>
    </div>
  )
}