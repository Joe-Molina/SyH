import React from 'react'
import { prisma } from './libs/prisma'
import { json } from 'stream/consumers'
import internal from 'stream';
import Link from 'next/link';


async function HomePage() {

  //const socios = await prisma.socios.findMany();

  
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