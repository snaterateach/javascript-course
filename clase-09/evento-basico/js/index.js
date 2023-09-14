// Estructura
// elemento = div,h1,span, p , etc


// Listado de eventos
// https://www.javatpoint.com/javascript-events
// https://www.w3schools.com/jsref/dom_obj_event.asp

//let evento = 'dblclick';
//? OPCION 1 - addEventListener
    // elemento.addEventListener(evento, funcion_asociada)
    //+ Referenciamos al elemento
       //let button1 = document.getElementById("button1");
       let button1 = document.querySelector("#button1");


    //+ Asociamos el evento al elemento
        // Haciendo uso de una funcion anonima
        /*button1.addEventListener('click', function(){
            alert("El usuario hizo click en el primer boton");
        });*/

        // Haciendo uso de llamada a una funcion - dando un poco de orden al código
        /*const respuestaAlClick = ()=>{
            alert("haciendo uso de arrow function")
        }*/

        function respuestaAlClick(){
            alert("haciendo uso de funcion declarativa")
        }
        
        button1.addEventListener('click', respuestaAlClick);

        // Referenciado al unDiv del html
        let unDiv = document.getElementById("unDiv");
        unDiv.addEventListener('dblclick', respuestaAlClick);

//? OPCION 2 - Usando una propiedad
    // Estructura
    // elemento.onEvento = arrow funcion / funcion anonima / funcion declarativa
        let button2 = document.getElementById("button2");

    // una forma de asociar una funcion al evento
    button2.onclick = () =>{ alert(' click en el boton 2')};
   
    // segunda forma de asociar una funcion a un evento
    button2.onclick = respuestaAlClick;


//? OPCION 3 - Através de un atributo del tag

// <nombre_elemento (tag) onEvento="funcion_asociada"> un texto </ nombre_elemento>

   function clickButton3(){
    alert(' click en el tercer boton');
   }
