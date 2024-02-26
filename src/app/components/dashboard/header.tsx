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
    <section className='w-48 h-[95%] bg-sky-100 flex justify-start items-center flex-col mx-4 rounded-xl'>
      <div className='w-5/6 h-32 bg-sky-200 flex items-center justify-center rounded-xl mt-4'>
        <p className='text-sky-700 font-extrabold'>Web SyH</p>
      </div>
      {Object.values(links).map((link) => (
        <Link href={link.url} className='p-2 bg-sky-200 text-sky-700 my-3 rounded-lg w-5/6'> {link.name} </Link>
      ))}
    </section>
  )
}

export default Heeader