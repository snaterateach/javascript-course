//= Estructura While
    /*while(condicion){ // expresión que tiene como resultado un booleano ( true / false)
        // intrucciones
    }*/
// NOTA: controlar hasta cuando se ejecuta el ciclo


//? Ejemplo
let n = 1;

while (n < 10) {
    console.log('valor de n: ' + n);
    n++;
}

//? convertir ciclo "for" en "while"
for (let k = 0; k < 10; k++) { // cuando sabemos el numero de repeticiones de una tarea
  console.log(k);
}

let k = 0; 
while (k < 10) { // cuando no sabemos el numero de repeticiones
    console.log(k);
    k++; // contador
}


//? Cuando usamos un ciclo for/while ?


//? Ejemplo "continue" en un ciclo "while"
let j = 0;

while (j<10) {
    if( j === 4){
        j++;
        continue;
    }
    console.log(j);
    j++;
}

