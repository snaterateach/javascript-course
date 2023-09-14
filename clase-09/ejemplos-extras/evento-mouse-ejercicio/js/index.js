// Eventos para todos los elementos del body
let eventoDiv = document.querySelector("#eventoDiv");

eventoDiv.onmouseover = () =>{
    eventoDiv.innerHTML ="Mouse dentro del elemento";
} 

eventoDiv.onmouseout = () =>{
    eventoDiv.innerHTML ="Mouse fuera del elemento";
} 

eventoDiv.onmousedown = () =>{
    eventoDiv.innerHTML ="Apreta boton del mouse";
} 

eventoDiv.onmouseup = () =>{
    eventoDiv.innerHTML ="Suelta boton del mouse";
} 