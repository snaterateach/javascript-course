//= Crear nodo de tipo Elemento, etiqueta p

let parrafo = document.createElement("p"); // <p>    <p/>
parrafo.innerHTML= `<h2>Hola parrafo</h2>`;// <p>  <h2>Hola parrafo</h2>  <p/>
document.body.append(parrafo);


//= Crear elemento a un tag que no sea body

let divPrimero = document.getElementById("first");
let parrafoTodos = document.createElement("p");// <p>    <p/>
parrafoTodos.innerHTML= `<h2>Tercer párrafo</h2>`;
divPrimero.append(parrafoTodos);


