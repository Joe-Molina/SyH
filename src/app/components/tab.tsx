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


const DatosP = (dato: any, nombre: any) => {

  console.log(dato)
  console.log(nombre)

  return(
    <p className="py-1 px-3 text-sm mx-2 border-b border-b-gray-200"> <b className="bg-gray-200 rounded-lg px-2 py-1 text-gray-800">{dato.nombre}</b> {dato.dato}</p>
  )
}

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
          <CardContent className="space-y-2 my-1 flex flex-col justify-center-center border-b border-b-gray-200">
            <DatosP nombre="accion n°" dato={datos.codigo} />
            <DatosP nombre="direccion" dato={datos.direccion}/>
        <DatosP nombre="estatus" dato={datos.estatus}/>
        <DatosP nombre="rif" dato={datos.nrorif}/>
        <DatosP nombre="telefono" dato={datos.telefonos}/>
        <DatosP nombre="nota" dato={datos.nota}/>
        <DatosP nombre="email" dato={datos.email}/>
        <DatosP nombre="wwwcli" dato={datos.wwwcli}/>
        <DatosP nombre="tipo" dato={datos.tipo}/>
        <DatosP nombre="referencia 1" dato={datos.referenc1}/>
        <DatosP nombre="referencia 2" dato={datos.referenc2}/>
        <DatosP nombre="fax" dato={datos.numerofax}/>
      <DatosP nombre="persona de contacto" dato={datos.perscont}/>
      <DatosP nombre="direccion de cobro" dato={datos.direccobro}/>
      <DatosP nombre="direccion de envio" dato={datos.direcenvio}/>
      <DatosP nombre="genero" dato={datos.sexo}/>
      <DatosP nombre="nacionalidad" dato={datos.nacionalida}/>
      <DatosP nombre="estado civil" dato={datos.edocivil}/>
      <DatosP nombre="telefono de habitacion" dato={datos.telhabitaci}/>
      <DatosP nombre="celular" dato={datos.celular}/>
      <DatosP nombre="empresa donde trabaja" dato={datos.trabempresa}/>
      <DatosP nombre="telefono del trabajo" dato={datos.trabtelefon}/>
      <DatosP nombre="telefono movil" dato={datos.telefono_movil}/>
      <DatosP nombre="n° carnet" dato={datos.carnet}/>
      <DatosP nombre="exonerado" dato={datos.exonerdo}/>
      <DatosP nombre="fecha" dato={datos.fecha.toString()}/>
      <DatosP nombre="fecha de exoneracion" dato={datos.fch_exon ? datos.fch_exon.toString() : 'sin fecha'}/>
      <DatosP nombre="fecha de vencimiento de la accion" dato={datos.fin? datos.fin.toString() :'sin fecha'}/>
      <DatosP nombre="fecha de emision del carnet" dato={datos.feemicrnt? datos.feemicrnt.toString() : 'sin fecha'}/>
      <DatosP nombre="fecha de vencimiento del carnet" dato={datos.fevnccrnt? datos.fevnccrnt.toString() : 'sin fecha'}/>
      <DatosP nombre="fecha de nacimiento" dato={datos.fechanac? datos.fechanac.toString() : 'sin fecha'}/>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
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
