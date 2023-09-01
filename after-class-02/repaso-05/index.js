// ===================================================
// REPASO: USO DE ARREGLOS
// ===================================================
/*
    Crear una función que reciba un arreglo de strings y retorne:
        -   Un nuevo arreglo que contenga aquellos strings con exactamente
            3 letras.
    
    Pasos:
    1 - Definir una funcion.
    2 - Crear un ciclo que permita recorrer el arreglo.
    3 - Agregar un condicional que permita verificar si el valor del
        elemento en la posicion cumple con la condición.
    4 - Agregar resultado a nuevo arreglo.
    5 - Ejecutar la función.
*/ 

const palabras = ['taza', 'luz','mesa','aro']; // scope global
let nuevoArreglo = [];

function cuentaLetras(){
    const tamanio = palabras.length;

    for (let k = 0; k < tamanio; k++) {
        if(palabras[k].length === 3){
            nuevoArreglo.push(palabras[k]);
        }
        
    } 
}

cuentaLetras();
console.log(nuevoArreglo);
