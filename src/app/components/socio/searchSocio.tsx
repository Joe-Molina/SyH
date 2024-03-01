'use client'

import React from "react"
import Link from "next/link"
import { useState } from "react"

export const Buscador = (socios: any) => {

    const [search, setSearch] = useState('')
    const [stwich, setStwich] = useState(false)

    
    

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
    
    return (
        <div>
            <nav className="bg-gray-100 h-10 flex items-center rounded-sm mb-3">
            <input value={search} onChange={searcher} type="text" placeholder=" Buscar Socio..." className="h-7 ml-1 p-2 rounded-sm"/>
            <button className="bg-white py-1 px-3 mx-2 rounded-sm text-sm" onClick={handleCLick}> cambiar filtro </button>
            <p className="text-gray-600 text-sm">{stwich? 'buscando por codigo de accion': 'buscando por nombre'}</p>

            </nav>


            <section className='overflow-auto max-h-[580px] '>

            <article className='flex my-1 items-center border-b border-b-gray-200'>
                <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>accion n° </p>
                <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>Nombre</p>
            </article> 
            
                   { !stwich? 
                   results.map((socio: any) => (
                        <Link className='flex my-1 items-center border-b border-b-gray-200 hover:bg-gray-200' href={`/socios/${socio.codigo}`}>
                            <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>{socio.codigo}</p>
                            <p className='py-1 px-3 text-sm rounded-xl mx-2'>{socio.nombre}</p>
                        </Link>
                    ))
                    : 
                    resultsCodigo.map((socio: any) => (
                        <Link className='flex my-1 items-center border-b border-b-gray-200 hover:bg-gray-200' href={`/socios/${socio.codigo}`}>
                            <p className='py-1 px-3 text-sm rounded-xl mx-2 font-bold'>{socio.codigo}</p>
                            <p className='py-1 px-3 text-sm rounded-xl mx-2'>{socio.nombre}</p>
                        </Link>
                    ))
                    
                    }

            </section>
        </div>
    )
}