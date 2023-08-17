//= Estructura Do .. While

//? Estructura

    /*do{
        // instrucciones
    }while(condicion)*/

//? Ejecutar ciclo una sola vez
/*let numero = 0;
do{
    numero= prompt("Ingrese un numero");
    console.log(numero);
}while(parseInt(numero));*/


//? Programa que pide al usuario un número n cantidad de veces hasta
//? que escriba el número 0
let numero = 0;
do{
    numero= prompt("Ingrese un numero");
    console.log(numero);
}while(parseInt(numero) && numero !== 0);


