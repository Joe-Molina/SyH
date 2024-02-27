import React from 'react'
import { prisma } from './../libs/prisma'
import Link from 'next/link';

const  SociosPage  = async () => {

    const socios = await prisma.socios.findMany();

  return (
    <article className='p-4'>
        <div className='text-4xl  ml-2 font-bold'>Buscar Socios</div>
        <section className='overflow-auto max-h-72 '>
            <article className='flex my-1 items-center border-b border-b-gray-200'>
                <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>accion n° </p>
                <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>Nombre</p>
            </article>
            {
                socios.map(socio => (
                    <Link className='flex my-1 items-center border-b border-b-gray-200 hover:bg-gray-200' href={`/socios/${socio.codigo}`}>
                        <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>{socio.codigo}</p>
                        <p className='py-1 px-3 text-sm rounded-xl mx-2'>{socio.nombre}</p>
                    </Link>
                ))
            }
        </section>
    </article>
  )
}

export default SociosPage