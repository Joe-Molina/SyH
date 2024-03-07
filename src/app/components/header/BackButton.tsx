'use client'
import React from 'react'



function BackButton() {
  return (
    <button onClick={() =>  window.history.back()} className="px-4 py-1 bg-zinc-900 text-white rounded-md m-4 hover:scale-105 transition">volver</button>
  )
}

export default BackButton