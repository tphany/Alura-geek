async function mostrarProductos() {
  try {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();

    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Limpiar contenido existente

    data.forEach(product => {
      const productCardTemplate = `
        <li class="product-card">
          <img src="${product.imagen}" alt="${product.descripcion}" class="product-image">
          <p class="product-name">${product.nombre}</p><br>
          <div class="producto__precio__boton">
            <p class="product-price"><b>$${product.precio}</b></p>
            <button class="delete-button">
              <img src="images/delete.png" alt="Eliminar" class="delete-icon">
            </button>
          </div>
        </li>
      `;

export default mostrarProductos;