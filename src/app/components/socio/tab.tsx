'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import InfoSocios from "./tabSections/infoSocios"
import InfoFamiliares from '@/app/components/socio/tabSections/infoFamiliares'
import Back from '@/app/components/header/BackButton'
import Link from 'next/link'
import {useState} from 'react'
export function TabsDemo( data: any) {
  // informacion sobre los familiares de los socios
  const dataf = data.data.familiares

  
// informacion personal de socios 
  const datos = data.data.socio


  
  const [loading, setLoading] = useState(false)

  const handleCLick2 = () =>{
      setLoading(!loading)
      console.log(loading)
  }

  return (
    <Tabs defaultValue="Informacion personal" className="mx-3 mt-3">
    {
      loading? 
      <div className="font-bold text-3xl">cargando...</div>

      :
      <div>
      <div className="flex justify-between">
      <Back/>
      <Link href={"/facturas/" + datos.codigo}  className="px-4 py-2 bg-zinc-900 text-white rounded-md m-4 hover:scale-105 transition" onClick={handleCLick2}>facturas</Link>
      </div>
                <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Informacion personal">Informacion personal</TabsTrigger>
        <TabsTrigger value="Familiares">Familiares</TabsTrigger>
      </TabsList>
      <TabsContent value="Informacion personal">
          <InfoSocios dataSocios={datos}/>
      </TabsContent>
      <TabsContent value="Familiares">
       <InfoFamiliares dataFamiliares={dataf}/>
      </TabsContent>
        </div>
      }
    </Tabs>
  )
}
