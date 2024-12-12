import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")


//cada vez que se cree un elemento card, se creara un elemento del tipo li//
export default function crearCard(titulo, descripcion, url, imagen) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<li class="product-card">
              <img src="images/dbz1.jpg" alt="Dragon Ball Z Blue-ray" class="product-image">
              <p class="product-name">Dragon Ball Z Blue-ray Disc Episodios 271 a 291</p>
              <div class="precio__delete">
              <p class="product-price"><b>$36.990</b></p>
              <button class="delete-button">
                <img src="images/delete.png" alt="Eliminar" class="delete-icon">
              </button>
              </div>
`;
    return video;
}


async function mostrarProductos(){
    try{
         const listaAPI = await conexionAPI.listarVideos()

    listaAPI.forEach(video=>lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagem)))

}catch{
    lista.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>`;
}
}

mostrarProductos()