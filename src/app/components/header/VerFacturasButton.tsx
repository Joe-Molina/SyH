'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export function VerFacturasButton() {

  let [search, setSearch] = useState('')

  const router = useRouter()

  const searcher = (e: any) => {
    setSearch(e.target.value)
    console.log(search)
}


  return (
    <div className='flex text-zinc-500 shadow-sm shadow-slate-300 px-2 py-1  rounded-lg'>
      <input onChange={searcher} className='w-32 mr-3 text-black rounded-sm' type="text" placeholder='num accion...'/>
      <button onClick={() => {
        router.push('/facturas/' + search);
        search = ""
         }} className='shadow-sm'> buscar facturas </button>
    </div>
  )
}