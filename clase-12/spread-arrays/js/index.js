//Unir arrays:


//Copiar arrays:


//Mutar objetos:



//? Ejemplo 
let number_1 = document.getElementById("number_1");
let number_2 = document.getElementById("number_2");
let number_3 = document.getElementById("number_3");
let show_data = document.getElementById("show_data");
let result = document.getElementById("result");

show_data.onclick = () =>{
    let values = [];
    /*values.push(number_1.value);
    values.push(number_2.value);
    values.push(number_3.value);*/
    values.push(parseInt(number_1.value), parseInt(number_2.value), parseInt(number_3.value));
    console.log(values);
    console.log(...values);
    sumaValues(...values);
    //sumaValues(number_1.value, number_2.value, number_3.value);
}

const sumaValues = (x,y,z) =>{
    let suma = x+y+z;
    result.innerHTML = `<p>La suma de los valores es ${suma}</p>`
}



