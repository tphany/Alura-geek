/*con este archivo nos conectaremos a nuestro json-server*/
async function agregarProducto() {
  const conexion = await fetch("http://localhost:3000/Articulos");

  // Esperar la conversión a JSON
  const conexionConvertida = await conexion.json();

  return conexionConvertida
  //console.log(conexionConvertida)
}

export const conexionAPI={
  agregarProducto
}

