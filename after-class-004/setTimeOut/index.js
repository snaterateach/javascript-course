// funcion declarativa
function hola() {
    console.log('Hola!');
}

// function anonima
const pregunta = function(){
    console.log('¿Como estas?')
}

// Funcion flecha
const saluda =()=>{
    console.log('Atentamente: yo :)')
}

setTimeout(hola, 2000); // 1 segundo
setTimeout(pregunta, 1000); // 2 segundos
setTimeout(saluda, 3000); // 3 segundos