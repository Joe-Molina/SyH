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


export function TabsDemo( data: any) {
  // informacion sobre los familiares de los socios
  const dataf = data.data.familiares

  
// informacion personal de socios 
  const datos = data.data.socio
  const direccion = datos.foto;
  const partes = direccion?.split('\\');
  const foto = partes != undefined? partes[partes.length - 1] : "" ;

  return (
    <Tabs defaultValue="Informacion personal" className="mx-3 mt-3">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Informacion personal">Informacion personal</TabsTrigger>
        <TabsTrigger value="Familiares">Familiares</TabsTrigger>
        <TabsTrigger value="Facturas">Facturas</TabsTrigger>
      </TabsList>
      <TabsContent value="Informacion personal">
        <Card>
          <CardHeader>
            <CardDescription>
            <img src={ (foto != '')?'http://cimnet.com/fotocarnet/' + foto : 'error'} onError={(e) => {
        e.target.src = '/avataricon.png'; }} className='w-32 h-32 rounded-md border' />
            </CardDescription>
            <CardTitle>{datos.nombre}</CardTitle>
          </CardHeader>
          <InfoSocios dataSocios={datos}/>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Familiares">
       <InfoFamiliares dataFamiliares={dataf}/>
      </TabsContent>
      <TabsContent value="Facturas">
        <Card>
          <CardHeader>
            <CardTitle>Facturas</CardTitle>
            <CardDescription>
              Aca se presentaran las facturas...
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
