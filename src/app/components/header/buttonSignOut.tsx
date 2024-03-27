'use client'

import React from 'react'
import {signOut} from 'next-auth/react'
import Link  from 'next/link'

export function ButtonSignOut() {

  return (
    
       <button className='mr-4  text-zinc-500 shadow-sm shadow-slate-300 px-3 py-1 text-sm rounded-sm' onClick={() => signOut()}>Cerrar Sesion</button>       
   
    

  )
}

export function ButtonSignIn() {

  return (
    
       <Link className='mr-4 bg-zinc-900 text-white px-3 py-1 rounded-sm' href='/auth/login'>iniciar sesion</Link>
   
    

  )
}