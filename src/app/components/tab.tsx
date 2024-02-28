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
import InfoSocios from "./socios/tabs/infoSocios"

import InfoFamiliares from '@/app/components/socios/tabs/infoFamiliares'


export function TabsDemo(data: any) {

  

  const datos = data.data

  const direccion = datos.foto;
  const partes = direccion?.split('\\');
  const foto = partes[partes.length - 1];

  console.log(foto)


  return (
    <Tabs defaultValue="Informacion personal" className="mx-3 mt-2">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Informacion personal">Informacion personal</TabsTrigger>
        <TabsTrigger value="Familiares">Familiares</TabsTrigger>
        <TabsTrigger value="Facturas">Facturas</TabsTrigger>
      </TabsList>
      <TabsContent value="Informacion personal">
        <Card>
          <CardHeader>
            <CardDescription>
            <img src={ 'http://cimnet.com/fotocarnet/' + foto} className='w-32 h-32 rounded-md' />
            </CardDescription>
            <CardTitle>{datos.nombre}</CardTitle>
          </CardHeader>
          <InfoSocios dataSocios={datos}/>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Familiares">
       <InfoFamiliares/>
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
