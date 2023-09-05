//? Recibir funciones 1
/*function esViejo(){
    console.log('es viejo');
}

function validarEdad(edad,validar){
    let mayor = 18;
    if( edad >= mayor){
        validar();
    }
}

validarEdad(10, esViejo);

*/

//? Recibir funciones 2
let lista = [1,2,3,4,5];
let listaResultante;

function duplicado(elemento){
    console.log(' elemento = ', elemento)
    listaResultante.push(elemento * elemento);
}

function concatenar(elemento){
    listaResultante.push(elemento + ' - x ');
}

// funcion de orden superior
function mapear(lista,fn){
    listaResultante = [];
    for (let index = 0; index < lista.length; index++) {
       fn(lista[index]) //cada uno de los elementos del arreglo
    }
}

mapear(lista,duplicado);
console.log(listaResultante);
mapear(lista,concatenar);
console.log(listaResultante);




