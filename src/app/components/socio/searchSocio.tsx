'use client'

import React from "react"
import Link from "next/link"
import { useState } from "react"

export const Buscador = (socios: any) => {

    const [search, setSearch] = useState('')
    const [stwich, setStwich] = useState(false)
    const [loading, setLoading] = useState(false)

    
    

    const socioss: any = socios.socios

    //funcion de busqueda
    const searcher = (e: any) => {
        setSearch(e.target.value)
    }

    // metodo de filtrado
    let results = !search? socioss : socioss.filter((dato: any) => dato.nombre.toUpperCase().includes(search.toLocaleUpperCase()))
    let resultsCodigo = !search? socioss : socioss.filter((dato: any) => dato.codigo.toUpperCase().includes(search.toLocaleUpperCase()))

    const handleCLick = () =>{
        setStwich(!stwich)
    }

    const handleCLick2 = () =>{
        setLoading(!loading)
        console.log(loading)
    }
    
    return (
        <div>
           
            {
                loading? 

                <div className="text-3xl font-bold">cargando...</div>

                 : 

                 <div>
                     <nav className="bg-zinc-950 h-10 flex items-center rounded-sm mb-3">
            <input value={search} onChange={searcher} type="text" placeholder=" Buscar Socio..." className="h-7 ml-1 p-2 rounded-sm"/>
            <button className="bg-white py-1 px-3 mx-2 rounded-sm text-sm hover:bg-slate-600 hover:text-white transition" onClick={handleCLick}> cambiar filtro </button>
            <p className="text-white text-sm">{stwich? 'buscando por codigo de accion': 'buscando por nombre'}</p>

            </nav>


            <section className='overflow-auto '>

            <article className='flex my-1 items-center border-b border-b-gray-200'>
                <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>accion n° </p>
                <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>Nombre</p>
            </article> 
            
                   { !stwich? 
                   results.map((socio: any) => (
                        <Link className='flex my-1 items-center border-b border-b-gray-200 hover:bg-gray-200' href={`/socios/${socio.codigo}`} key={socio.codigo} onClick={handleCLick2}>
                            <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>{socio.codigo}</p>
                            <p className='py-1 px-3 text-sm rounded-xl mx-2'>{socio.nombre}</p>
                        </Link>
                    ))
                    : 
                    resultsCodigo.map((socio: any) => (
                        <Link className='flex my-1 items-center border-b border-b-gray-200 hover:bg-gray-200' href={`/socios/${socio.codigo}`} key={socio.codigo} onClick={handleCLick2}>
                            <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>{socio.codigo}</p>
                            <p className='py-1 px-3 text-sm rounded-xl mx-2'>{socio.nombre}</p>
                        </Link>
                    ))
                    
                    }

            </section>

                 </div>
            }

        </div>
    )
}