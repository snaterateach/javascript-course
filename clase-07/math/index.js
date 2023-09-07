// METODO MATH
console.log(Math);

// Usando una de las propiedades
//console.log('PI: '+Math.PI);
//console.log('E: '+Math.E)

//? min() - devuelve el menor de los elementos
//console.log(Math.min(55, 13,0,-25, 93,4));

//? max()  - devuelve el mayor de los elementos
//console.log(Math.max(55, 13,0,-25, 93,4));

//? ceil() - devuelve un numero redondeado hacia arriba
/*console.log(Math.ceil(0.95));
console.log(Math.ceil(0.25));
console.log(Math.ceil(3));
console.log(Math.ceil(-7.004));
*/
//? floor() - devuelve un numero redondeado hacia abajo
/*console.log(Math.floor(0.95));
console.log(Math.floor(0.25));
console.log(Math.floor(3));
console.log(Math.floor(-7.004));
*/
//? round() - redondea al nro mas cercano
/*console.log(Math.round(0.95));
console.log(Math.round(0.25));
console.log(Math.round(3));
console.log(Math.round(-7.004));
*/
//? random() - devuelve un numero aleatorio
console.log(Math.random()) // [0,1)
console.log(Math.random() * 50) 
// 20 = donde comienza el rango
// 50 == nros a partir del 20
console.log(Math.random() * 50 + 20) // aleatorios [20,70)

//? combinacion de operaciones
console.log(Math.round(Math.random() * 100)) // entre 0 hasta 100
console.log(Math.ceil(Math.random() * 100)) // entre 1 hasta 100
console.log(Math.floor(Math.random() * 100)) // entre 0 hasta 99   

// EJERCICIO APLICADO
//¿Cuál consola comprar Xbox one o Ps4?
function decideCualComprar(){
    const num = Math.floor(Math.random() * 3 + 1) // [1,4)
    console.log('numero aleatorio = '+num)
    if(num === 1 || num == 2){   
        console.log('Compra un Xbox one');
    }else{
        console.log('Compra un Ps4');
    }
}

decideCualComprar();
