'use client'
import React from 'react'



function BackButton() {
  return (
    <button onClick={() =>  window.history.back()} className="px-4 py-1 text-zinc-500  rounded-md m-4 hover:scale-105 transition shadow-md border border-zinc-300">volver</button>
  )
}

export default BackButton