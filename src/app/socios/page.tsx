import React from 'react'
import { prisma } from './../libs/prisma'
import { Buscador } from '../components/socio/searchSocio';

const  SociosPage  = async () => {

    const socios = await prisma.socios.findMany();

    

  return (
    <article className='p-4 '>
        <section >
                <Buscador socios={socios} />
        </section>
    </article>
  )
}

export default SociosPage
