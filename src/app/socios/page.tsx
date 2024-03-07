import React from 'react'
import { prisma } from './../libs/prisma'
import { Buscador } from '../components/socio/searchSocio';
import { loginIsRequiredServer } from '../api/auth/[...nextauth]/route';

const  SociosPage  = async () => {

  await loginIsRequiredServer()

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
