import React from 'react'
import Link from 'next/link';
import Heeader from './components/header';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';


async function HomePage() {

  const session = await getServerSession(authOptions)
  console.log(session)
  
  return (

      <div className='  flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col bg-gray-50 p-6'>
        <h2 className='text-7xl font-bold mb-5'>SyH Data</h2>
        <Link href="./socios" className='bg-black text-white px-4 py-1 rounded-sm hover:scale-105 transition'>inciar sesion</Link>
        </div>
      </div>

  )
}

export default HomePage