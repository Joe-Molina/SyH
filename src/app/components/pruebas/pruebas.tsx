import React from 'react'

const validacionFoto = (foto: any) => {

  fetch('http://cimnet.com/fotocarnet/' + foto)
  .then(response => {
  if (!response.ok) {
    throw new Error('El archivo no existe');
    }
    // El archivo existe, puedes realizar acciones adicionales aquí
  })
.catch(error => {
  console.error('Error al validar la existencia del archivo: toma esta ruta /avataricon.png', error);
});

}

function Pruebass(data: any) {

  return (
    <div>Pruebas</div>
  )
}

export default Pruebass