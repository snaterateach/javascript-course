//? Ejemplo 
let number_one = document.getElementById("number_one");
let number_two= document.getElementById("number_two");
let calculate= document.getElementById("calculate");
let result= document.getElementById("result");

calculate.onclick = ()=>{
    let first_value = parseInt(number_one.value);
    let second_value = parseInt(number_two.value);
    //console.log(typeof first_value)
    /*if(first_value > second_value){
        result.innerHTML = 'El primer valor es mayor que el segundo';
    }*/

    (first_value > second_value) 
        && (result.innerHTML = 'El primer valor es mayor que el segundo');
}  