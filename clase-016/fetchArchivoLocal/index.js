async function cargarProductos() {
  try {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "Loading...";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error("No se pudo obtener la información");
    }

    const productos = await response.json();

    productContainer.innerHTML = "";
    productos.forEach((producto) => {
      const cardHtml = generarTarjetaProducto(producto);

      const card = document.createElement("div");
      card.innerHTML = cardHtml;

      productContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

window.addEventListener("load", cargarProductos);

function generarTarjetaProducto(producto) {
  return `
    <div class="product-card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="buy-button">Comprar</button>
    </div>
  `;
}




