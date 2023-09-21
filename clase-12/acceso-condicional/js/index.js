//? Ejemplo 
let nombre_estudiante = document.getElementById('nombre_estudiante'); // primer input
let apellido_estudiante = document.getElementById('apellido_estudiante'); // primer input
let nota_1 = document.getElementById('nota_1'); //  input notas
let nota_2 = document.getElementById('nota_2'); //  input notas
let nota_3 = document.getElementById('nota_3'); //  input notas
let calculate = document.getElementById('calculate');

let estudiante = {};


calculate.onclick = ()=>{
    estudiante.nombre = nombre_estudiante.value;
    estudiante.apellido = apellido_estudiante.value;
    estudiante.estudiante_nota1 = nota_1.value;
    estudiante.estudiante_nota2 = nota_2.value;
    estudiante.estudiante_nota3 = nota_3.value;

    
    let promedio = (estudiante?.estudiante_nota1 + estudiante?.estudiante_nota2 + estudiante?.estudiante_nota3)/3;
    console.log(estudiante?.estudiante_nota11)
    console.log(promedio);
}