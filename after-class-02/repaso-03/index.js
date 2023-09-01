// =====================
// REPASO: USO DE ARRAYS
// =====================

/*
    Crear una función sumaArreglo() que tome como parámetro un arreglo de números, 
    retornar la longitud del arreglo + la suma de todos los números del arreglo.
*/

const numeros = [2,5,7,2];

const sumaArreglo = (arreglo) =>{
    const longitudArreglo = arreglo.length;
    let sumaElementos = 0;
    for (let j = 0; j < longitudArreglo; j++) {
        sumaElementos = sumaElementos + arreglo[j];
        //sumaElementos +=  arreglo[j];
    }
    return sumaElementos + longitudArreglo;
}

let respuesta = sumaArreglo(numeros);
console.log(respuesta);


