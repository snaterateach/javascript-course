//= Funciones que devuelven valores

//? Estructura
/*function nombreDeFuncion(){
   let valor;
   return valor;
}

*/



//* CASO 1 - Obtener respuesta de una función a través de una variable
/*let respuesta;

function hola(nombre){
   respuesta = 'Bienvenido '+ nombre;
}

hola('Victor');
alert(respuesta);
*/

//* CASO 2 - Obtener respuesta de una función haciendo uso de "return"
/*let respuesta;

function hola(nombre){
   return 'Bienvenido '+ nombre;
}

respuesta = hola('victor');
alert(respuesta)

*/


// ==========================================================
//? ¿Qué pasa si colocamos instrucciones debajo de 'return' ?
// =========================================================

let respuesta;

function hola(nombre){
   return 'Bienvenido '+ nombre;
   const a = 3; // NO SE EJECUTA
}

respuesta = hola('victor');
alert(respuesta)

/**
 * + EJERCICIO 1:
 *  Realizar un programa que una vez que solicita dos números, los pasa
    a una función donde se calcula la suma de éstos. La función devolverá dicho resultado,
    pero en el caso de que sea negativo, debe mostrar un mensaje diciendo que el resultado
    es negativo, en caso contrario mostrar un mensaje que diga que el resultado es positivo.
 */

       // entrada
       let primerNumero = +(prompt("primer numero"));
       let segundoNumero= +(prompt("segundo numero"));
   
       // lógica
       function sumarValores(primero, segundo){
         let sumar = primero + segundo;
   
         return sumar;
         
       }
   
       let resultado = sumarValores(primerNumero, segundoNumero);
   
      if(resultado > 0) console.log(' resultado positivo');
      if(resultado < 0) console.log(' resultado negativo');
