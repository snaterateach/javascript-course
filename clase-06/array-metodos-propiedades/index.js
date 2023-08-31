//* ====================================
//* Métodos y Propiedades de un Arreglo
//* ====================================
let frutas = ['manzana','naranja','pera'];

//? length ==> obtener el nro de elementos de un arreglo
//let tamanio = frutas.length;
//console.log(frutas.length);
/*for (let index = 0; index < tamanio; index++) {
    const element = array[index];
}*/


//? Agregar elementos al arreglo

//= push ==> agregamos un elemento al final del arreglo
//frutas.push('banana');
//console.log(frutas)

//= unshift ==> agregar un elemento al principio dle arreglo
//frutas.unshift('uva');
//console.log(frutas)

//? Eliminar elementos del arreglo

//= pop ==> eliminamos el ultimo elemento del arreglo
//frutas.pop();
//console.log(frutas)
//= shift ==> eliminamso el primer elemento del arreglo
//frutas.shift();
//console.log(frutas)

//+ Creación de arreglos

//= splice ==> elimina elementos del arreglo de manera permanente
    //? Estructura: nombreDelArreglo.splice(posicion_inicial,elementos_eliminar)
    //let frutas = ['manzana','naranja','pera'];
    //frutas.splice(1,2);
    //console.log(frutas)

//= slice ==> obtnieneun trozo del arreglo. No lo modifica
    console.log(frutas);
    let arregloRespuesta = frutas.slice(1,2);
    console.log(frutas);
    console.log(arregloRespuesta);

//= join ==> 
    console.log(frutas.join('+'))

//= concat ==> 
    let citricos = ['limón','ananá'];
    console.log(frutas.concat(citricos));
    console.log(citricos.concat(frutas))
 


//+ Búsqueda y comprobación

//= indexOf ==> devolver la posicion de un elemento en el arreglo
console.log(frutas.indexOf('banana'))

//= includes ==> devuelve un booleano (true -está, flase - no está)
console.log(frutas.includes('pera'))

//+ Ordenamiento

//= reverse ==> invierte el arreglo
console.log(frutas.reverse())
