//= Ejemplo 1


/*const listaNombres = [];
let   cantidad     = 5;
console.log(listaNombres.length)
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase()); // toUpperCase = convierte en mayuscula
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["ANA","EMA"]);
alert(nuevaLista.join("*"));
*/

//= Ejemplo 2

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
//const nombres=[]

const eliminar = (nombre) => {
    
    let index = nombres.indexOf(nombre)
    console.log('posicion = '+index)
    if (index != -1 ) {
        let elimnado = nombres.splice(index, 1);
        console.log(elimnado);
    }else{
        console.log('no existe el nombre a eliminar')
    }
}

eliminar('Ana');
console.log(nombres);


    



