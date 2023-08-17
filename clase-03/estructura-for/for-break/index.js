//= Ejemplo Break

/**
    Ejemplo 1
*/

  /*for (let k = 0; k < 5; k++) {
    if(k == 3){
      break;
    }
    console.log(k);
  }*/

/**
     Ejemplo 2:

     - Pedir al usuario el total de nombres a insertar.
     - Hacer uso de la estructura de ciclo para solicitar la cantidad de nombres
       definida por el usuario.
     - Se debe validar que el número de caracteres de un nombre NO puede ser menor a 3.
     - Si número de caracteres es menor que 3 se debe salir del ciclo y mostrar un mensaje
       que diga lo siguiente: "Se ha encontrado al menos un nombre inválido".
       
       MEJORA 1 :
       - Crear una variable llamada 'todosNombresValidos', inicializarla en 'true'
       - La variable anterior cambiará a 'false' cuando uno de los nombres sea menor a 3.
       - Una vez que finalice el ciclo mostrar los siguientes mensajes:
            * Si es 'todosNombresValidos' true; "Todos los nombres son válidos."
            * Si es 'todosNombresValidos' false; "Se ha encontrado al menos un nombre inválido."
     
       MEJORA 2 :
       - Validar que el usuario introduzca  un número.

*/


    // Entrada
      let vecesApreguntar = +(prompt("Total de nombres a Evaluar:"));
      let nombre;
      let todosNombresValidos = true;

    // Lógica
    // Number.isInteger == manipulando un numero
    if(Number.isInteger(vecesApreguntar)){
      for (let i = 0; i < vecesApreguntar; i++) {
        nombre = prompt("Dame un nombre:");
        if(nombre.length < 3){
          todosNombresValidos = false;
          //break;
        }
      }
    }else{
      alert("Debes introducir un numero.")
    }
     

    // Salida
    if(todosNombresValidos){
      alert("Todos los nombres son válidos.");
    }else{
      alert("Se ha encontrado al menos un nombre inválido.");
    }

  