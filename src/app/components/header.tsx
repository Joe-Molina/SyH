import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { ButtonSignIn, ButtonSignOut } from './header/buttonSignOut'


async function Heeader() {

  const session = await getServerSession(authOptions)


  return (
    <section className='z-20 h-16 flex items-center justify-between border-b bg-white  border-gray-200 fixed top-0 left-0 w-full'>
      <div className='w-52 h-10 flex items-center justify-center'>
        <p className='text-black font-extrabold'>SyH Data</p>
      </div>
      {session? <span className='px-5 py-1 bg-zinc-900 rounded-sm text-white '>Usuario: {session.user?.name}</span> : <div></div>}
      {session? <ButtonSignOut/> : ''}
    </section>
  )
}

export default Heeader