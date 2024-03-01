import React from 'react'
import Link from 'next/link'

function Heeader() {

  const links = {
    socios: {
      url: "/socios",
      name: "Socios"
    },
    facturas: {
      url: "/facturas",
      name: "Facturas"
    }

  }

  return (
    <section className=' h-16 flex items-center justify-between border-b border-gray-200'>
      <div className='w-52 h-10 flex items-center justify-center'>
        <p className='text-black font-extrabold'>Web SyH</p>
      </div>
      <div>
      {Object.values(links).map((link) => (
        <Link href={link.url} className='p-2  my-3 mr-3'> {link.name} </Link>
      ))}
      </div>
    </section>
  )
}

export default Heeader