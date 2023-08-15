/**
Ejercicio #1
Pedir un número y decir si es un número negativo, si es positivo o cero.
*/

    // Entrada
   /* let numero = prompt("Introduce un numero:");

    // Logica
    if(numero > 0){
         // Salida
        console.log("Es positivo");
    }else if(numero < 0){
         // Salida
        console.log("Es negativo");
    }else if(numero == 0){
         // Salida
        console.log("El numero es cero");
    }else{
         // Salida
        console.log("Necesito un número");
    }
   */

/*
Ejercicio #2
Pedir tres números enteros con un valor del 1 al 10, sacar el 
promedio de los tres números y mostrar true si el promedio es mayor 
a 5 caso contrario mostrar false
*/

//entrada 
let nota1 = parseInt(prompt("nota uno: "));
let nota2 = parseInt(prompt("nota dos: "));
let nota3 = parseInt(prompt("nota tres: "));

//lógica del problema
let promedio = (nota1 + nota2 + nota3)/3;

if(nota1 >10 || nota2 >10 || nota3 > 10){
    console.log("La nota debe ser menor a 10 ..")
}else{
    if(promedio >= 5){
        //salida
        console.log("TRUE");
    }else{
        //salida
        console.log("FALSE");
    }
    
}
