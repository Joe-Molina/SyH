import React from 'react'
import Link from 'next/link'

function Heeader() {

  const links = {
    socios: {
      url: "/dashboard/socios",
      name: "Socios"
    },
    facturas: {
      url: "/dashboard/facturas",
      name: "Facturas"
    }

  }

  return (
    <section className='w-48 min-h-screen bg-sky-100 flex justify-center items-center flex-col'>
      {Object.values(links).map((link) => (
        <Link href={link.url} className='p-2 bg-sky-200 text-sky-700 my-3 rounded-lg'> {link.name} </Link>
      ))}
    </section>
  )
}

export default Heeader