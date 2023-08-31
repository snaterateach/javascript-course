
//TODO notas:
    //? un grupo de elementos en distintas posiciones
    //? Tienen en comun que estan guardadas en una misma variable.
    //? Los elemento pueden ser de cualquier tipo de dato (number,string,booleanos, objetos)

//TODO Estructura
    // const/let nombreDeVariable = [elemento1,elemento2, ..., elementon];


//TODO Especificaciones y //= Declaración
const arregloVacio = [];
const arregloVacioDos = [1,2,3,4,5];

//TODO Acceder a los elementos del Array
    //nombreDelArreglo[posicion] (siempre comienza en la posicion 0)
    console.log(arregloVacioDos[5]);

    //? reemplazar un elemento del arreglo
    const letras = ['a','b', 'c','d'];
    letras[2] = 'z';
    console.log(letras)
    //? Recorrer un array

   console.log(letras[0]);
   console.log(letras[1]);
   console.log(letras[2]);
   console.log(letras[3]);

    for (let index = 0; index < 4; index++) {
        console.log('posicion: '+ index + ' = ' +letras[index]);
    }
    //? Suma de los elementos de un arreglo
   
    const arregloDeNumeros = [1,2,3,4,5];
    let suma = 0;
    for (let index = 0; index < 5; index++) {
       suma = suma + arregloDeNumeros[index]
    }

    console.log(' total de la suma = ' + suma);

