/*
    Tenemos un arreglo de strings y queremos convertirla en un arreglo de números, donde cada 
    elemento representa la longitud de los elementos de la matriz original.

    Considere el siguiente arreglo:
    const jsFrameworks = ['React', 'Angular', 'Nestjs', 'Nextjs'];
    const jsResult = [5,7,6,6] => resultado a obtener
*/

// Cual operador usariamos??
/*const jsFrameworks = ['React', 'Angular', 'Nestjs', 'Nextjs'];
const jsResult = jsFrameworks.map( elemen => elemen.length);
console.log(jsResult);

*/
// Cómo lo resolveriamos si no existiera el map
const jsFrameworks = ['React', 'Angular', 'Nestjs', 'Nextjs'];
// Paso 2 
const obtenerTamanio = elemento => elemento.length;
const concatenaLongitud = elemento => elemento + ' - ' + elemento.length;

// Paso 3
const mapFor = (arr,fn) =>{
    const newArray = [];
    for (let index = 0; index < arr.length; index++) {
        // arr[index] = valor actual del elemento del arreglo arr
        // fn = obtenerTamanio
        newArray.push(fn(arr[index]));
    }
    return newArray;
}
// Paso 1
const longArray = mapFor(jsFrameworks,obtenerTamanio);
console.log(longArray);
const concatArray = mapFor(jsFrameworks,concatenaLongitud);
console.log(concatArray);
