import React from 'react'
import Link from 'next/link';
import Heeader from './components/header';


async function HomePage() {
  
  return (

      <div className='h-[670px]  flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col bg-gray-50 p-6'>
        <h2 className='text-7xl font-bold mb-5'>Web SyH</h2>
        <Link href="./socios" className='bg-black text-white px-4 py-1 rounded-sm hover:scale-105 transition'> entrar</Link>
        </div>
      </div>

  )
}

export default HomePage