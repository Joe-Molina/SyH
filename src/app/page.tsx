import React from 'react'
import Link from 'next/link';
import Heeader from './components/dashboard/header';


async function HomePage() {
  
  return (
   <main className='min-h-screen bg-sky-200'>
      <div>
        <h2>Web SyH</h2>
        <Link href="./dashboard"> entrar</Link>
      </div>
   </main>

  )
}

export default HomePage