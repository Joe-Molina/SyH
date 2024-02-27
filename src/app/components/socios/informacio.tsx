import React from 'react'

type Props = {
    nombre: string
    dato: string | Date
}



function CardInfo(props:Props) {

  return (
    <p className='bg-sky-200 rounded-xl m-2 px-2 text-sky-800'>{props.nombre}: {props.dato}</p>
  )
}

export default CardInfo