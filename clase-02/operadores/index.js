//= Operadores de igualdad
    // ==  ; evalua que los valores sean iguales
    // === ; evalua que los valores y tipo  sean iguales

//= Operadores de desigualdad
    // !==  ; evalua que los valores sean distintos
    // !=== ; evalua que los valores y tipo  sean ditintos

//= Operadores de orden
    // a > b, a >= b (4>=3)
    // a < b, a <= b

//= Operadores lógicos
   // AND (&&), OR(||), NOT (!)


   // Entrada
  /*  let numero = 4;
    let resultado = numero / 2;

   // Logica
    if(numero > 0 && resultado > 0){
        // salida
        console.log("Cumple la condición");
    }else{
        // salida
        console.log("No Cumple la condición");
    }
   */

/*

EJERCICIO
============
-   Solicitar el nombre al usuario y lo guardará en una variable denominada ‘nombre’
-   Solicitar el primer apellido al usuario y lo guardará en una variable denominada ‘apellido’
-   Almacenaremos en una nueva variable denominada ‘fullName’, el nombre y primer apellido 
    registrado separados por un espacio.
-   Solicitar año de nacimiento al usuario y lo guardará en una variable denominada ‘anio’
-   Calcularemos y asignaremos a una nueva variable ‘edad’ el año de nacimiento del usuario 
    (sin tener en cuenta el mes de nacimiento.)
-   Mostrar en un console.log:
    – Nombre completo: (valor de la variable ‘fullName’)
    – Año de nacimiento: (valor de la variable ‘year’)
*/ 

// Entrada
    let nombre = prompt("Su Nombre?");
    let apellido = prompt("Su Nombre?");
    let anio = prompt("Su Nombre?");
    let edad;

// Logica

    if(nombre !== "" && apellido !=="" && edad !==""){
        let fullName = nombre + " " + apellido;
        edad = 2023 - anio;
        // salida
        console.log("Nombre completo: ", fullName);
        console.log("Año de nacimiento: ", edad); 
    }else{
        console.log("Falta completar datos")
    }
  


