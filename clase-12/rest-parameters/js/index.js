//? Ejemplo 

//? Ejemplo 
let number_1 = document.getElementById("number_1");
let number_2 = document.getElementById("number_2");
let number_3 = document.getElementById("number_3");
let show_data = document.getElementById("show_data");
let result = document.getElementById("result");

show_data.onclick = () =>{
    sumaValues(+(number_1.value), +(number_2.value), +(number_3.value));
}

const sumaValues = (...values)=>{
    console.log(values);
    result.innerHTML = `<p>La suma de los valores es ${values.reduce((acc,n)=>acc+n)}</p>`
}