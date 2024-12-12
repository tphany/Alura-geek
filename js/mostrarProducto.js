async function mostrarProductos() {
  try {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();

