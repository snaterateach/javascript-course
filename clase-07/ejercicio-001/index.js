/*
    Ejemplo 1: 
    Tenemos un arreglo de números. Queremos crear un nuevo arreglo que contendrá 
    los valores duplicados del primer arreglo. 

    Arreglo ejemplo: 
    const arr1 = [1, 2, 3, 4]
*/

//? Sin función de orden superior
function aprendiendoFunciones(){
    const arr1 = [1, 2, 3, 4];
    const arr2 = []; // va creciendo con la insersion de nuevos elementos

    for (let index = 0; index < arr1.length; index++) {
       arr2.push(arr1[index] * 2);
    }
    return arr2;
}
console.log(aprendiendoFunciones());

  
//? función de orden superior
//= Primera forma
function aprendiendoFuncionesDos(){
    const arr1 = [1, 2, 3, 4];
    const arr2 = []; // va creciendo con la insersion de nuevos elementos

    arr1.forEach( valor =>{
        //console.log(valor)
        arr2.push(valor * 2);
    })
    return arr2;
}

console.log(aprendiendoFuncionesDos())
  
//= Segund forma
function aprendiendoFuncionesTres(){
    const arr1 = [1, 2, 3, 4];
    const arr2 =arr1.map(function(item){
        return item * 2;
    })
    return arr2;
}

console.log(aprendiendoFuncionesTres())
//? Optimizandio con una "función de flecha"
 
function aprendiendoFuncionesCuatro(){
    const arr1 = [1, 2, 3, 4];
    const multDos = item => item * 2;
    const arr2 = arr1.map(multDos);
    return arr2;
}

console.log(aprendiendoFuncionesCuatro())