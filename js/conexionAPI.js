async function mostrarProductos() {
  const conexion = await fetch("http://localhost:3001/videos");

  // Esperar la conversión a JSON
  const conexionConvertida = await conexion.json();

  return conexionConvertida;
}

// Exportar las funciones
export const conexionAPI = {
  mostrarProductos,
};