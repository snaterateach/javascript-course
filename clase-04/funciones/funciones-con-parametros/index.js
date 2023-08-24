//= Ejemplo de funciones con parámetros
  //* alert("hola soy  un alert");
  //* prompt("dame tu nombre");

//= ¿Qué son los parámetros en una función?
    //? Variables que existen dentro de la funcion
    //? Definen la llamada de una funcion

//* Ejemplo 1 (único parámetro)
/*function tablaDelUno(hasta) {
    for (let index = 1; index <= hasta; index++) {
        console.log("1 x " + index + " = " + 1 * index);
    }
}
tablaDelUno(4);
*/
//* Ejemplo 2 (múltiples parámetros)
function tablaDeMultiplicar(tabla,hasta) {
    for (let index = 1; index <= hasta; index++) {
        console.log( tabla + " x " + index + " = " + tabla * index);
    }
}

tablaDeMultiplicar(7,10);

//* Ejemplo 3 (documentar)
/**
 * Descripcion: lo que hace la funcion
 * @param {number} parametro1
 * @param {string} parametro2
 */
function name() {
    
}

//* Ejemplo 4 (llamadas múltiples)
function tablaDeMultiplicar(tabla,hasta) {
    for (let index = 1; index <= hasta; index++) {
        console.log( tabla + " x " + index + " = " + tabla * index);
    }
}

// Llamadas multiples
tablaDeMultiplicar(7,10);
tablaDeMultiplicar(8,10);
tablaDeMultiplicar(9,10);


//* Ejemplo 5 (parámetros por defecto)
function sumar(numero1,numero2 = 1) {
    let sumaTotal = numero1 + numero2;
    console.log('el toatl es: ' + sumaTotal);
}

sumar(3);

sumar(3, 4);




//* Notas: 
