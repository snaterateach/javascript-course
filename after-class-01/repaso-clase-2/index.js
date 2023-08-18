
/**
 * Estructura - Condicionales
 
 *  Simple
    if(condicion){
        instrucción
    }

 *  En caso de que no se cumpla
    if(condicion){
        instrucción
    }else{
        instrucción
    }

 *  Anidado
    if(condicion){
        instrucción
    }else if(condicio2){
        instrucción
    }else{
        instrucción
    }

 */
/*
    EJERCICIO - 1 - Culpable o no 
    ======================
    Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
        -  En caso afirmativo el usuario responderá si
        -  En caso contrario responderá no.
    Si el usuario responde si se escribirá «irás a la cárcel».
    Si el usuario responde no se escribirá  «irás a casa».
    En cualquier caso se escribirá «la documentación por favor».

*/

    // Entrada
   /* let culpable = prompt("¿Eres culpable? SI/NO");

    // lógica  
    if(culpable === "SI" || culpable === "si" || culpable === "Si"){
        console.log("irás a la cárcel");
    }else if(culpable === "NO" || culpable === "no" || culpable === "No"){
        console.log("irás a casa");
    }else{
        console.log("la documentación por favor");
    }

*/












    
/*
    EJERCICIO - 2 - El topping 
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

*/
    // Entrada
    let topping = prompt("¿Qué tipo de topping te gustaría?");
    let helado = 1.90;
    let precio = 0;
    let precioAPagar = 0;

    // lógica
    if(topping==="oreo" ){
        if(topping==="kitKat"){
            precio=1;
        }
    }else if(topping==="kitKat"){
        precio=1.50;
    }else if(topping==="brownie"){
        precio=0.75;
    }else if(topping==="lacasitos"){
        precio=0.95;
    }else{ 
        precio = 0;
        console.log("no tenemos este topping, lo sentimos");
    }

    precioAPagar = helado + precio;

    // salida
    console.log("El precio total del helado es de: " + precioAPagar + "€");

      


