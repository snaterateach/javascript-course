//= Estructura
/*for(let k=0; condicion;k++){
    // instrucciones
}*/


//= ¿Porqué let y no const?

//= Mostrar por consola los número del 0 al 3
/*let cero = 0;
let uno = 1;
let dos = 2;
let tres = 3;

console.log(cero);
console.log(uno);
console.log(dos);
console.log(tres);
*/
//= For usando el ejercicio anterior
/*for (let index = 0; index <= 3; index++) {
    console.log(index);
}*/

//= Contador y Acumulador
// contador = sumar un valor constante
// index++ ==> index = index +1 ==> index+=1

/*let a = 1;
let b = 1;
let c = 1;

a = a + 1;
b++;
c+=1;

console.log('a = ',a);
console.log('b = ',b );
console.log('c = ',c);

for (let index = 0; index <= 3; index++) {
    console.log(index);
}

for (let index = 0; index <= 3; index= index + 1) {
    console.log(index);
}

for (let index = 0; index <= 3; index+=1) {
    console.log(index);
}*/


//= Ejemplo incluyendo el ultimo numero
/*for (let i = 0; i <= 4; i++) {
    console.log(i);
    
}*/

//= Ejemplo sin incluir el ultimo numero
/*for (let i = 0; i < 4; i++) {
    console.log(i);
    
}*/

//= Uso de prompt y for
//let condicion = parseInt(prompt("Cuantas vueltas daremos?"));
let condicion = +(prompt("Cuantas vueltas daremos?"));

for (let l = 0; l < condicion; l++) {
    console.log(l);
}


