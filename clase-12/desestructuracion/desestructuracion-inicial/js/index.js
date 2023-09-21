//? Ejemplo 
//? Ejemplo 

let nombre_estudiante = document.getElementById('nombre_estudiante'); // primer input
let apellido_estudiante = document.getElementById('apellido_estudiante'); // primer input
let nota_1 = document.getElementById('nota_1'); //  input notas
let nota_2 = document.getElementById('nota_2'); //  input notas
let nota_3 = document.getElementById('nota_3'); //  input notas
let calculate = document.getElementById('calculate');
let result_1 = document.getElementById('result_1');
let result_2 = document.getElementById('result_2');
let estudiante ={};

calculate.onclick = ()=>{
    // Creando los key de la variabke objeto estudiante
    estudiante.nombre = nombre_estudiante.value;
    estudiante.apellido = apellido_estudiante.value;
    estudiante.estudiante_nota_1 = parseInt(nota_1.value);
    estudiante.estudiante_nota_2 = parseInt(nota_2.value);
    estudiante.estudiante_nota_3 = parseInt(nota_3.value);
    let average = (estudiante?.estudiante_nota_1 + 
                    estudiante?.estudiante_nota_2 + 
                    estudiante?.estudiante_nota_3)/3;
                    result_1.innerHTML = `<p>Nombre: ${estudiante.nombre}</p>
                        <p>EL promedio de la nota es: ${average}</p>`;
    console.log(estudiante?.edad|| 'no existe la propiedad');

    let { estudiante_nota_1 : est_nota1, estudiante_nota_2: est_nota2, estudiante_nota_3: est_nota3} = estudiante;
    console.log(est_nota1)
    console.log(est_nota2)
    console.log(est_nota3)
}
