
// ====================================================
//=  Ejemplo contador  
// ====================================================

// Entrada
let counter = 0;
let userNumber;

// Logica
//= ¿Que hace el programa?
for (let index = 0; index <= 3; index++) {
    userNumber = parseInt(prompt("introduce un numero"));
    if( userNumber > 3){
         counter = counter + 1; // contador
    }
}

// Salida
alert("hay "+counter+" numeros mayores que 3"); 

