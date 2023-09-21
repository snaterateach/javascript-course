//? Ejemplo 

let number_one = document.getElementById("number_one");
let number_two= document.getElementById("number_two");
let calculate= document.getElementById("calculate");
let result= document.getElementById("result");

// falsy = 0, null, undefined, NaN, false, string vacio
calculate.onclick = ()=>{
    let first_value = parseInt(number_one.value);
    let second_value = parseInt(number_two.value);
    
    let evaluate = first_value || second_value;
    result.innerHTML = `<p>${evaluate}</p>
    <p> primer valor : ${first_value}</p>
    <p>segundo valor: ${second_value}</p>`;
}