// funciones que crean nuevas funciones
//? Retornar funciones 1
/*function mayorQue(n) {
    console.log('n = ' + n)
    //console.log('m = '+ m)
    // (m) => m > 10
    return (m) => m > n
}
console.log(mayorQue(10));
// (m) => m > 10
let mayorQueDiez = mayorQue(10); // aqui se devuelve una funcion
let mayorQueQuince = mayorQue(15);

console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueQuince(12) )  //  true

*/
//? Retornar funciones 2
function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

// (a,b) => a + b // (4,6) => 4 + 6
console.log(asignarOperacion("sumar"))
let suma = asignarOperacion("sumar");
// (a, b) => a - b // (5,3) => 5 - 3
console.log(asignarOperacion("restar"))
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2
