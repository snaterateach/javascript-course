//= Condicional if ..  elseif .. else 
    //? Estructura 
 /*  if(condicion){
        //?intruccion
    }else if(condicion2){
         //?intruccion
    }else{
         //?intruccion
    }
*/





    
/*
===================
= EJERCICIO  
===================
Escribir un algoritmo que pida al usuario una nota entre 0 y 5.
Tomando en cuenta la respuesta del usuario mostrar el resultado haciendo uso de
las siguientes posibles respuestas:
    * nota = 0 ==> Muy deficiente
    * nota = 1 ==> Insuficiente
    * nota = 2 ==> Suficiente
    * nota = 3 ==> Bien
    * nota = 4 ==> Notable
    * nota == 5 ==> Sobresaliente
    * Ninguna de las anteriores Nota erronea
*/

// Entrada
    let nota = prompt("Ingrese una nota entre 0 y 5:");

// lógica
    if(nota == 0){ // condicion
        // salida
        console.log("Muy deficiente");
    }else if(nota == 1){ // condicion 2
        // salida
        console.log("Insuficiente");
    }else if(nota == 2){ // condicion 3
        // salida
        console.log("Suficiente");
    }else if(nota == 3){// condicion 4
        // salida
        console.log("Bien"); 
    }else if(nota == 4){ // condicion 5
        // salida
        console.log("Notable");
    }else if(nota == 5){ // condicion 6
        // salida
        console.log("Sobresaliente");
    }else{
        console.log("Ninguna de las anteriores Nota erronea");
    }

// salida

  







