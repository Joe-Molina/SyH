export const validarPhoto = async (url: any) => {
  try {
    const response = await fetch('http://cimnet.com/fotocarnet/' + url);

    if (response.ok) {
      // Aquí puedes devolver el valor o realizar otras acciones con los datos

      const linkValido = 'http://cimnet.com/fotocarnet/' + url
      console.log(linkValido);
      return linkValido;
    } else {
      const AvatarIcon = '/avataricon.png'

      console.log(AvatarIcon);
      return  AvatarIcon;
    }
  } catch (error) {
    console.error('Hubo un error al intentar verificar la existencia del archivo:');
    throw error; // Propaga el error para que pueda ser manejado externamente
  }
}
