import React from 'react'
import Heeader from './../components/dashboard/header';

function LayoutDashboard( 
    {children} : {children:React.ReactNode}
 ) {

  return (

    <main className='w-screen h-screen flex items-center '>
        <Heeader/>
        <section className='w-full bg-slate-300 h-[95%] rounded-xl mr-4'>
            {children}
        </section>
    </main>

  )
}

export default LayoutDashboard