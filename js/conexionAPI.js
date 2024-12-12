async function listarProductos() {
  try {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();

    // Do something with the data, e.g., update the DOM
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    data.forEach(product => {
      const li = document.createElement('li');
      li.textContent = product.name; // Assuming 'name' is a property of the product object
      productList.appendChild(li);
    });
  } catch (error) {
    console.error("Error al buscar el producto:", error.message);
    // Display an error message to the user
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = "Se ha producido un error al buscar el producto.";
  }
}

listarProductos();