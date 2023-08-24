//= Reglas:
   // * los nombres de las funciones no pueden comenzar por un numero
   // * los nombres de las funciones no pueden repetirse
   // * uso de camel Case o snake case.

//= Estructura

   /* function nombreDeLaFuncion(){
        // cuerpo o tarea de la funcion
    }*/

//= Declarar la función.
    //? preparar la funcion
    //? darle un nombre a la funcion
    //? Decirle a la funcion la tarea que debe ejecutar
  
//= Llamar la función.
    //? Convocarla para que haga una tarea.
    
//* Ejemplo 1
    // declarando la funcion
    function saludar() {
        // Tarea a realizar
        console.log('Hola soy una función!!')
    }
    // Llamar a la funcion
    saludar();


//* Ejemplo 2
    //? Tabla de multiplicar del 1
    /*
    console.log("1 x 1 = ", 1 * 1);
    console.log("1 x 2 = ", 1 * 2);
    console.log("1 x 3 = ", 1 * 3);
    console.log("1 x 4 = ", 1 * 4);
    console.log("1 x 5 = ", 1 * 5);
    console.log("1 x 6 = ", 1 * 6);
    console.log("1 x 7 = ", 1 * 7);
    console.log("1 x 8 = ", 1 * 8);
    console.log("1 x 9 = ", 1 * 9);
    console.log("1 x 10 = ", 1 * 10);
    */

    // La tabla de multiplicar se debe mostrar 3 veces
    /*for (let index = 1; index <= 10; index++) {
        console.log("1 x " + index + " = " + 1 * index);
    }
    for (let index = 1; index <= 10; index++) {
        console.log("1 x " + index + " = " + 1 * index);
    }
    for (let index = 1; index <= 10; index++) {
        console.log("1 x " + index + " = " + 1 * index);
    }*/

    function tablaDelUno() {
        for (let index = 1; index <= 10; index++) {
            console.log("1 x " + index + " = " + 1 * index);
        }
    }

    /*tablaDelUno();
    tablaDelUno();
    tablaDelUno();*/

    for (let index = 0; index < 3; index++) {
        tablaDelUno();
    }


//* Ejemplo 3
//= Cambiando el orden de la llamada de la función
dameUnaA(); // HOISTING = var / function
function dameUnaA(){
    alert("AAAAAAAAAAAAA");
}

//dameUnaA();
