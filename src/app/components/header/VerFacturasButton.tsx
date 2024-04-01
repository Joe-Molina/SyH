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

const searchFactura = () => {

    if(search.length > 5){
      router.push('/facturas/' + search);
    search = ""
    } else{
      alert('numero de accion invalida')
    }
     
}

const keyPress = (e: any) => {
  let keyy = e.key

  console.log(keyy)

  if(keyy == "Enter"){
    if(search.length > 5){
      router.push('/facturas/' + search);
    search = ""
    } else{
      alert('numero de accion invalida')
    }
  }
}


  return (
    <div className='flex text-zinc-500 shadow-sm shadow-slate-300  rounded-lg justify-between w-96'>
      <input onChange={searcher} onKeyDown={keyPress}  className=' mr-3 text-black rounded-sm px-2 py-1 w-full' type="text" placeholder='num accion...'/>
      <button onClick={searchFactura} className=' px-2 py-1 border-l border-zinc-200 hover:bg-zinc-200  rounded-sm'> buscar</button>
    </div>
  )
}