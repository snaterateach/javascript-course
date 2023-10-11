// Obtener el elemento 'post-list' del DOM
let postList = document.getElementById("posts-list");

// Función para obtener los posts
function obtenerPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => mostrarPosts(data))
    .catch((error) => {
      console.error("Error al obtener los posts:", error);
    });
}

function mostrarPosts(posts) {
  // Limitar a los primeros 10 posts
  const primerosPosts = posts.slice(0, 10);

  // Iterar a través de los 10 primeros posts
  primerosPosts.forEach((post) => {
    // Crear un elemento de lista y establecer su contenido
    const listItem = document.createElement("li");
    listItem.textContent = post.title;

    // Agregar una clase CSS para que parezca una tarjeta
    listItem.classList.add("post-card"); 
    // Puedes cambiar 'post-card' por el nombre de tu clase CSS

    // Agregar el elemento de lista a la lista 'post-list'
    postList.appendChild(listItem);
  });
}

// Llamar a la función para obtener los posts cuando la página se carga completamente
obtenerPosts();
