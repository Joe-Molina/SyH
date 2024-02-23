import React from 'react'
import { prisma } from './libs/prisma'
import { json } from 'stream/consumers'
import internal from 'stream';
import Heeader from './components/dashboard/header';

async function HomePage() {

  //const socios = await prisma.socios.findMany();

  
  return (
   <main className='min-h-screen bg-sky-200'>
      <Heeader/>
   </main>

  )
}

export default HomePage