import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const parentezco:any = {
  '00' : 'SOCIO',
  '01' :'CONYUGE  SOCIO',
  '02' :'PADRE/MADRE SOCIO',
  '03' :'HIJO(A) SOCIO',
  '04' :'HERMANO(A) SOCIO',
  '05' :'AFILIADO(A)',
  '06' :'CONYUGE AFILIADO',
  '07' :'HIJO(A) AFILIADO',
  '08' :'PASE DE INVITADO',
  '09' :'CONYUGE DISFRUTANTE',
  '10' :'PASE HIJO MAYOR DE 25',
  '11' :'PASE HERMANO DE SOCIO',
  '12' :'PASE NOVIO(A) DE HIJO MENOR 21',
  '13' :'PASE NOVIO(A) DE HIJO MAYOR 21',
  '14' :'PASE DE NOVIO(A) DE SOCIO',
  '15' :'PASE DE CUIDADOR(A)',
  '16' :'PASE EX-CONYUGE',
  '17' :'HIJO(A) DISFRUTANTE',
  '18' :'PADRE/MADRE DISFRUTANTE',
  '19' :'HERMANO(A) DISFRUTANTE',
  '20' :'PASE DE AMIGO',
  '21' :'PASE DE SOBRINO(A)',
  '22' :'PASE DE AHIJADO(A)',
  '23' :'PASE DE PRIMO(A)',
  '24' :'PASE PARA EXTRANJERO',
  '25' :'PASE PARA CUÑADOS',
  '26' :'PASE DE NUERA',
  '27' :'PASE TENNIS',
  '28' :'ABUELO(A) DE SOCIO',
  '29' :'ABUELO(A) DISFRUTANTE',
  '30' :'HIJO(A) SOCIO ENTRE 25 Y 30 AÑOS',
  '31' :'HERMANO(A) SOCIO ENTRE 21 y 25 AÑOS',
  '32' :'.HIJO(A) SOCIO',
  '33' :'.HIJO(A) DISFRUTANTE',
  '34' :'.HIJO(A) AFILIADO',
  '35' :'.HERMANO(A) SOCIO',
  '36' :'.HERMANO(A) DISFRUTANTE',
  '37' :'PASE DEPORTIVO'
}


const FamiliarCard = (data: any) => {

  const dataF = data.data

  const direccion = dataF.foto;
  const partes = direccion?.split('\\');
  const foto = partes != undefined? partes[partes.length - 1] : "" ;

  return (
   <AlertDialog>
   <AlertDialogTrigger asChild> 
     <article className='flex border w-96  p-3 1 rounded-md hover:scale-105 transition m-4 hover:bg-slate-100'>
    <img src={ (foto != '')?'http://cimnet.com/fotocarnet/' + foto : 'error' }  
      onError={(e) => {
        e.target.src = '/avataricon.png'; }} className='w-40 h-40 rounded-sm' />
    <div className='flex flex-col justify-between px-2'>    
      <p className='text-sm overflow-hidden p-2 rounded-sm bg-slate-900 text-white'>{dataF.nombre}</p>
      <p className=' rounded-md text-sm'>cedula: {dataF.cedula}</p>
      <p className=' rounded-md text-sm'>{parentezco[dataF.codigo_parentesco]}</p>
    </div>
   </article>
   </AlertDialogTrigger>

   <AlertDialogContent>
     <AlertDialogHeader>
      
       <AlertDialogTitle>
        <div className='flex'>
        <img src={ 'http://cimnet.com/fotocarnet/' + foto} alt="foto del familiar" className='w-40 h-40 border rounded-sm' />
        <div>
          <p className='ml-4 p-2 rounded-sm bg-slate-900 text-white mb-2 text-sm'>{dataF.nombre}</p>
          <p className='ml-4 bg-slate-200 p-1 m-1 rounded-md text-sm'>cedula: {dataF.cedula}</p>
          <p className='ml-4 p-1 m-1 bg-slate-200 rounded-md text-sm'>Familiar de: {dataF.codigo_socios}</p>
          <p className='ml-4 p-1 m-1 bg-slate-200 rounded-md text-sm'>{parentezco[dataF.codigo_parentesco]}</p>
        </div>
        </div>
        </AlertDialogTitle>
       <AlertDialogDescription>
        <div className='flex items-center'>
        <p className=' bg-slate-100 py-1 px-2 rounded-xl'>Codigo</p>
        <p className='ml-2'>{dataF.codigo_familiares}</p>
        </div>
        <div className='flex items-center'>
        <p className='my-1 bg-slate-100 py-1 px-2 rounded-xl'>Codigo de carnet</p>
        <p className='ml-2'>{dataF.carnet}</p>
        </div>
        <div className='flex items-center'>
        <p className='my-1 bg-slate-100 py-1 px-2 rounded-xl text-sm'>Fecha de nacimiento </p>
        <p className='ml-2'>{dataF.fechanac.toLocaleDateString()}</p>
        </div>
        <div className='flex items-center'>
        <p className='my-1 bg-slate-100 py-1 px-2 rounded-xl'>Fecha de vencimiento </p>
        <p className='ml-2'>{dataF.fvence.toLocaleDateString()}</p>
        </div>
        <div className='flex items-center'>
        <p className='my-1 bg-slate-100 py-1 px-2 rounded-xl'>fecha de emision carnet </p>
        <p className='ml-2'>{dataF.feemicrnt.toLocaleDateString()}</p>
        </div>
        <div className='flex items-center'>
        <p className='my-1 bg-slate-100 py-1 px-2 rounded-xl'>fecha de vencimiento carnet </p>
        <p className='ml-2'>{dataF.fevnccrnt.toLocaleDateString()}</p>
        </div>
       </AlertDialogDescription>
     </AlertDialogHeader>

     <AlertDialogFooter>
       <AlertDialogAction>Volver</AlertDialogAction>
     </AlertDialogFooter>
   </AlertDialogContent>
 </AlertDialog>
  )
}



function InfoFamiliares(dataFamiliares: any) {

    const datosFamilia = dataFamiliares.dataFamiliares
  
    return (
      <div>
        <h2 className='ml-3 text-4xl font-bold'>Familiares</h2>
        <div className='flex flex-wrap'>
          {datosFamilia.map((familiar: any, index: any) => (
            (familiar.codigo_parentesco !== '08' && familiar.codigo_parentesco !== '10' && familiar.codigo_parentesco !== '11' && familiar.codigo_parentesco !== '12' && familiar.codigo_parentesco !== '13' && familiar.codigo_parentesco !== '14' && familiar.codigo_parentesco !== '15' && familiar.codigo_parentesco !== '16' && familiar.codigo_parentesco !== '20' && familiar.codigo_parentesco !== '21' && familiar.codigo_parentesco !== '22' && familiar.codigo_parentesco !== '23' && familiar.codigo_parentesco !== '24' && familiar.codigo_parentesco !== '25' && familiar.codigo_parentesco !== '26' && familiar.codigo_parentesco !== '27' && familiar.codigo_parentesco !== '37') ? 
              <FamiliarCard data={familiar} key={index}/> : null
          ))}
        </div>
        <h2 className='ml-3 text-4xl font-bold'>invitados</h2>
        <div className='flex flex-wrap'>
        {datosFamilia.map((familiar: any, index: any) => (
            (familiar.codigo_parentesco !== '08' && familiar.codigo_parentesco !== '10' && familiar.codigo_parentesco !== '11' && familiar.codigo_parentesco !== '12' && familiar.codigo_parentesco !== '13' && familiar.codigo_parentesco !== '14' && familiar.codigo_parentesco !== '15' && familiar.codigo_parentesco !== '16' && familiar.codigo_parentesco !== '20' && familiar.codigo_parentesco !== '21' && familiar.codigo_parentesco !== '22' && familiar.codigo_parentesco !== '23' && familiar.codigo_parentesco !== '24' && familiar.codigo_parentesco !== '25' && familiar.codigo_parentesco !== '26' && familiar.codigo_parentesco !== '27' && familiar.codigo_parentesco !== '37') ? 
              null : <FamiliarCard data={familiar} key={index}/>
          ))}
        </div>
      </div>
    )
}

export default InfoFamiliares