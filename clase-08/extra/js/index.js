
const add =()=>{
    let fruta = prompt('Dame una nueva fruta');
    let lista = document.getElementById('lista'); // donde vamos a agregar el elemento nuevo
    let elemento = document.createElement('li');//<li></li>
    elemento.innerText = fruta;
    lista.append(elemento);
}