// TODOS LOS METODOS SON DE ORDEN SUPERIOR
//? forEach - recorrer cada elemento de un arreglo

//= Ejemplo 1
let caracteres = ['a', 'b', 'c'];

caracteres.forEach( (caracter) => console.log(caracter));

//= Ejemplo 2 - eliminar elemento del arreglo
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/
/*let numeros = [6,8,3,3];
let eliminar = 3;
numeros.forEach( function (elemento, index) {
    //console.log(' index = ' + index)
    if(elemento === eliminar){
        numeros.splice(index,1);
    }
})

console.log(numeros)

*/
//? find - Devuelve el primero que consigue o undefined

//= Ejemplo 1
/*const autos = ['ferrari', 'tesla', 'porshe'];

let auto = autos.find((auto) => auto == 'tesla');
console.log(auto)

//= Ejemplo 2
const personas = [
    {nombre: 'juan', edad: 15},
    {nombre: 'pedro', edad: 25}
];

let persona = personas.find( (persona) => persona.edad === 25)
console.log(persona);
*/
//? filter - devolver un arreglo de elementos o un arreglo vacio

//= Ejemplo 1
/*let numeros = [6,8,3,3];
let nuevo = numeros.filter( (numero) => numero >= 6);
console.log(nuevo)

//= Ejemplo 2
let palabras = ['spray', 'limite','elite','presente'];
let resultado = palabras.filter( (palabra) => palabra.length >= 6);
console.log(resultado)
*/
//? some - devuelve un booleano

//= Ejemplo 1
/*let numeros = [6,8,3,3];
let resultado = numeros.some((numero )=> numero > 4);
console.log(resultado)
*/
//= Ejemplo 2


//?  map - transformacion

//= Ejemplo 1
/*let numeros = [6,8,3,3,10,30];
let dobles = numeros.map((numero)=> numero * 2);
console.log(dobles.length);
console.log(numeros.length);

*/

//? reduce


//= Ejemplo 1
let numeros = [6,8,3,3,10,30];

//arreglo.reduce((acumulador,valor_actual),0)
let suma = numeros.reduce((anterior,actual)=> anterior + actual,0);
console.log(suma);

let anterior = 0;
for (let index = 0; index < numeros.length; index++) {
    anterior = anterior + numeros[index]
}

console.log(anterior)


