//= funciones anónimas ( sin nombre )
    //? Estructura
    /*const nombreVariable = function(){
        // tarea a ejecutar
    }*/

//= funcion con nombre o declarativa
     //? Estructura
    /*function nombreDeFuncion(){

    }*/

     
//?Ejemplo 1 ( Función con Nombre )

    /*function coheteEspacial() {
        console.log("despegando ...")
    }*/

//?Ejemplo 2 ( Función Anónima )
    const coheteEspacial = function () {
        console.log("despegando ...")
    }

    coheteEspacial();


/**
 * + Ejercicio:
 * Crear una funcion anónima que cumpla con las siguientes condiciones:
 * 1 - Si se pasa un número, retornar el valor multiplicado por 3
 * 2 - Si se pasa un string, retornar el string "ARRR!"
 * 3 - Si se pasa cualquier otro tipo, retornar el mismo valor.
 */

//? funcion anonima
let respuesta; // variable global
    /*const devuelveValor = function(valor){
        if(typeof valor === 'number'){
            respuesta = valor * 3;
        }else if(typeof valor === 'string'){
            respuesta = "ARRR!";
        }else{
            respuesta = valor;
        }
    }
    devuelveValor(false);
    console.log(respuesta);
    */

//? Funcion flecha
    const devuelveValor = (valor) =>{
        if(typeof valor === 'number'){
            respuesta = valor * 3;
        }else if(typeof valor === 'string'){
            respuesta = "ARRR!";
        }else{
            respuesta = valor;
        }
    }
    devuelveValor(false);
    console.log(respuesta);

    // USANDO RETURN Y VARIABLE LOCAL
    /*const devuelveValor = function(valor){
        let respuesta; // variable local
        if(typeof valor === 'number'){
            respuesta = valor * 3;
        }else if(typeof valor === 'string'){
            respuesta = "ARRR!"
        }else{
            respuesta = valor;
        }

        return respuesta;
    }

    let resultado = devuelveValor(3);
    console.log(resultado);
    */

// USANDO SWITCH 
  /*  const devuelveValor = function(valor){
        let respuesta; // variable local

        switch (typeof valor) {
            case 'number':
                respuesta = valor * 3;
                break;
            case 'string':
                respuesta = "ARRR!";
                break;
            default:
                respuesta = valor;
                break;
        }

        return respuesta;
    }

    let resultado = devuelveValor("x");
    console.log(resultado);

    */