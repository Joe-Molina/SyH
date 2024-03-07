import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { ButtonSignIn, ButtonSignOut } from './header/buttonSignOut'


async function Heeader() {

  const session = await getServerSession(authOptions)


  return (
    <section className=' h-16 flex items-center justify-between border-b border-gray-200'>
      <div className='w-52 h-10 flex items-center justify-center'>
        <p className='text-black font-extrabold'>Web SyH</p>
      </div>
      {session? <span className='px-5 py-1 bg-zinc-900 rounded-sm text-white '>Usuario: {session.user?.name}</span> : <div></div>}
      {session? <ButtonSignOut/> : ''}
    </section>
  )
}

export default Heeader