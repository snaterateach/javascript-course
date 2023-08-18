// Conceptos
//====================================
//= variables               ==> let / const. let nombre_de_variable; const valorDePi;
//= tipos de valores        ==> string, number, boolean, undefined, null
//= operaciones matemáticas ==> + , - , * /
//= concatenacion           ==> + unir el valor d e2 variables con valores de tipo string
//= prompt                  ==> input a nuestro programa
//= console                 ==> output del programa
//= alert                   ==> output del programa

/*
    EJERCICIO - 1 - 
    ======================
    Pedir un número a un usuario y luego dividirlo entre 10, 
    ejemplo: 5 / 10 igual 0.5
*/

// Entrada
    //let numero = parseInt(prompt("Introduce un número: "));
/*    let numero = +(prompt("Introduce un número: "));
// lógica
    let resultado = numero / 10;
// salida
    console.log("Tu resultado es: " + resultado);

*/













/*
    EJERCICIO - 2 -
    ======================
    Crear un programa donde el usuario ingrese la temperatura en 
    Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.
    F = (ºC * 1,8) + 32.

*/

    // Entrada
 /*   let celcius = +(prompt("Introduce los grados en Celcius: "));

    // Lógica
    let fahrenheit = (celcius * 1.8) + 32;

    // Salida
    alert("EL resultado de la conversión es: " + fahrenheit + " grados F");
*/
 











/*
    EJERCICIO - 3 - ¿Cuántos pesos debo pagar por dolar? 
    ======================

    Escribir un programa donde se le pida al usuario la cantidad de dólares
    que quiere comprar.
    Se debe pedir tambien al usuario la cotización del dolar blue al dia de hoy.
    Mostrar un mensaje donde se muestre el total de pesos a pagar por la cantidad
    de dólares que se quiere comprar.

*/

    // Entrada
    let dolares = +(prompt("¿Cuántos dolares quieres comprar?"));
    let dolarBlue = +(prompt("Cuánto cotiza el dolar Blue?"));

    // Lógica
    let aPagar = dolares * dolarBlue;

    // Salida
    console.log("Por los "+ dolares+" USD debes pagar: " + aPagar + " pesos");






