/**
 *  Estructura
 
    switch (key) {
    case "":
        ...
        break;
    case "":
        ...
        break;
    default:
        ...
        break;
}
 * 
 */



/*
    EJERCICIO - 1 - El topping 
    ======================
    Escribe un programa que responda a un usuario que quiere comprar un helado en una 
    conocida marca de comida rápida cuanto le costará en función del topping que elija.
    Consideremos lo siguiente:
    - El helado sin topping cuesta 1.90€.
    - El topping de oreo cuesta 1€.
    - El topping de KitKat cuesta 1.50€.
    - El topping de brownie cuesta 0.75€.
    - El topping de lacasitos cuesta 0.95€.
    En caso de no disponer del topping solicitado por el usuario el programa escribirá 
    por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del 
    precio del helado sin ningún topping.

    Convertir la solución a una estructura de Switch

*/

let topping = prompt("qué topping quieres");
let precio = 0.00;
let helado = 1.90;
let precioFinal = 0.00;

/*if(topping=="oreo"){
    precio = 1;
}else if(topping == "kitkat"){
    precio = 1.50;
}else if(topping == "brownie"){
    precio = 0.75;
}else  if(topping == "lacasitos"){
    precio = 0.95;
}else{
    document.write("no tenemos este topping, lo sentimos. ");
    precio = 0;
}*/


switch (topping) {
    case "oreo":
        precio = 1;
        break;
    case "kitkat":
        precio = 1.50;
    break;
    case "brownie":
        precio = 0.75;
    break;
    case "lacasitos":
        precio = 0.95;
    break;
 
    default:
        console.log("no tenemos este topping, lo sentimos. ");
        break;
}


precioFinal = helado + precio;
console.log("el helado cuesta " + precioFinal + " €");


