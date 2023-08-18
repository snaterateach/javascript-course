/* 
    EJERCICIO - 1 - Análisis
    ======================
    ¿ Cual es el resultado del siguiente ejemplo?
*/

// Respuesta: El bucle se ejecuta de 20 a 70.

let i = 20;
while (i <= 70) {
	document.write("El valor del bucle es: " + i + "<br>");
	i++;
}


/* 
    EJERCICIO - 2 - Menú
    ======================
    Crear un menu con tres opciones: escribir, leer, ssalir. 
    El usuario elegirá una opción y en un alert se le indicará la opción elegida. 
    El programa vuelve a mostrar el menu y se repite el proceso. 
    El programa terminará cuando se pulse la opción de salir.

    NOTA: Hacer uso de la estructura Do .. while
*/

let opcion = '';

do{
    opcion = prompt("1.- Escribir\n 2.- Leer\n 3.- Salir\n Escoge una opción:");       
    switch(opcion){
        case '1':
                alert("Eliges Escribir")
            break; 
        case '2':
            alert("Eliges Leer")
            break; 
            case '3':
            alert("fin del programa");
                break;
        default:
            alert("debes elegir una de las opciones")
   }
}
while(opcion != '3');



