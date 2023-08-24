//= Scope Local
   //? usadas dentro d ebloques de codigo
   //? llamese bloque de codigo lo que tengamos dentro de {}

//?Ejemplo 1 ( Variable Local )
   /* function miNumero() {
        let numero = 19; // variable local
        console.log(numero);
    }

    miNumero();
    console.log(numero); // no se alcanza

*/
//= Scope Global
   //? se puede acceder desde cualquier lugar dle codigo



//?Ejemplo 2 ( Variable global )
/*let numero = 23;
console.log(numero);

function miNumero() {
    numero = 19;  // reescribimos el valor d ela variable
    console.log(numero);
}

console.log(numero);
miNumero();
console.log(numero);
*/
//?Ejemplo 3 ( Variable local )
let numero = 23; // variable global
console.log(numero);

function miNumero() {
    let numero = 19;  // reescribimos el valor d ela variable
    console.log(numero);
}

console.log(numero);
miNumero();
console.log(numero);