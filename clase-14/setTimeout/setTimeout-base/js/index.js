// = Estructura
// * setTimeout - Se ejecuta una sola vez
// setTimeout(funcion, tiempo)
// tiempo = esta expresado en milisegundos
// 1000 milisegundo = 1 segundo, 5000 milisegundos = 5 segundos


  // = Ejemplo 1 - Sincronía
 function hello() {
    console.log('Hola');
 }
 function world() {
  console.log('Mundo ');
}

function sayHello() {
  hello();
  world();
}

sayHello();

 
  // = Ejemplo 2 - Asincronía

const impimir = ()=>{
  console.log(' imprime ')
}

setTimeout(impimir,3000);
console.log('Fin del programa');
 

 
 

 


