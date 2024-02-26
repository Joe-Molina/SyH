import React from 'react'
import { prisma } from './../../libs/prisma'
import Link from 'next/link';
import { useState } from 'react';

const  SociosPage  = async () => {


    const socios = await prisma.socios.findMany();

    //const socios = await loadSocios()



  return (
    <>
        <div className='ml-2 text-xl font-bold'>Socios</div>
        <section className='overflow-auto max-h-72 '>
            {
                socios.map(socio => (
                    <article className='flex my-1 items-center'>
                        <p className='bg-green-400 text-green-800 py-1 px-3 text-sm rounded-xl mx-2'>accion n°: {socio.codigo}</p>
                        <h1 className='bg-red-300 text-red-900 py-1 px-3 text-sm rounded-xl mx-2'>{socio.nombre}</h1>
                        <Link href={`/dashboard/socios/${socio.codigo}`}>ver</Link>
                    </article>
                ))
            }
        </section>
        <section>
        </section>
    </>
  )
}

export default SociosPage