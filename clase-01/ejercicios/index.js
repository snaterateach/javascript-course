/*
Ejercicios: 

1 - Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo.
    Ejemplo:  ¡Hola, Juan!
2 - Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre 
    almacenado en una variable y luego mostrar el resultado en consola.
3 - Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

*/

// 1 - Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo.
    // prompt que recibe un string
    // console.log
    // concatenar con algun otro texto

    //let nombre = prompt(" Ingrese su nombre: ");
    //console.log("Hola " + nombre);


/* 2 - Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre 
    almacenado en una variable y luego mostrar el resultado en consola.
*/

    // prompt recibe un numero
    // parsearlo = convertir el valor en un numero
    // declarar una variable con un numero
    // mostrar el resultado de la suma

   /* let segundo_numero = 5;
    let primer_numero = prompt("Introduce un número: "); // recibo tipo string
    primer_numero = parseInt(primer_numero); // convierto en numero - reescribiendo la variable
    let suma = primer_numero + segundo_numero;
    console.log("el resultado es: " + suma);

    */

  //  3 - Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
  // pedir un texto con prompt
  // pedir un segundo texto con prompt
  // unir los dos textos
  // mostra el resultado

  let nombre = prompt("Ingrese su nombre: ");
  let apellido = prompt("Ingrese su apellido: ");

  let nombre_apellido = nombre +" "+ apellido;

  //alert(nombre +" "+ apellido);
  alert(nombre_apellido);


    

