import { conexionAPI } from "/js/conexionAPI.js";

const lista = document.querySelector("[data-lista]");/*con esto el ul del html queda ingresado en js*/

function crearCard(nombre,descripcion,precio,imagen) {
    const producto = document.createElement("li");
    producto.className = "product-card";/*con la clase de la lista*/
    producto.innerHTML = `
        <img src="${imagen}" alt="${descripcion}" class="product-image">
        <p class="product-name">${nombre}</p>
        <div class="precio__delete">
            <p class="product-price"><b>$${precio}CLP</b></p>
            <button class="delete-button">
                <img src="images/delete.png" alt="Eliminar" class="delete-icon">
            </button>
        </div>`;
    return producto;
}

async function agregarProducto() {
    const listaAPI = await conexionAPI.agregarProducto(); // Obtener datos desde la API
    
    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.nombre,producto.descripcion,producto.precio,producto.imagen)))
}

agregarProducto();