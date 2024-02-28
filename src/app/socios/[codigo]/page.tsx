import React from 'react'
import {prisma} from './../../libs/prisma'
import { TabsDemo } from '@/app/components/tab'

const socio = async (codigo: string) => {

  const socio = await prisma.socios.findFirst({
    where: {
      codigo
    }
  })

  return socio
}

type Socio = {
  nombre: string
  codigo: string
  cedula: string
  direccion: string
  telefonos: string
  nrorif: string
  foto: string
  estatus: string
  email: string
  nota: string
  wwwcli: string
  tipo: string
  referenc1: string
  referenc2: string
  numerofax: string
  fecha: Date
  perscont: string
  direccobro: string
  direcenvio: string
  sexo: string
  nacionalida: string
  fechanac: Date
  edocivil: string
  telhabitaci: string
  celular: string
  trabempresa: string
  trabtelefon: string 
  telefono_movil: string 
  carnet: string
  feemicrnt: Date
  fevnccrnt: Date
  exonerdo: string
  fch_exon: Date
  fin: string

}


async function socioPage({ params: { codigo } }: { params: { codigo: string } }) {


  const socioo: Socio = await socio(codigo)


  return (
    <div>
      <TabsDemo data={socioo}/>
    </div>
  )
}

export default socioPage