//? Ejemplo 
let input_number = document.getElementById("input_number");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.onclick = ()=>{
    let number = input_number.value;
    const currentDate = new Date();
    console.log(currentDate);
    const currentYear = currentDate.getFullYear();
    console.log(currentYear);
    let age = currentYear - number;
    console.log(age);

    /*if(age>=18){
        result.innerHTML = '<p>El usuario es mayor de edad</p>'
    }else{
        result.innerHTML = '<p>El usuario es menor de edad</p>'
    }*/
    
    // condicion ? true : false

    (age>=18) ? (result.innerHTML = '<p>El usuario es mayor de edad</p>') : 
    result.innerHTML = '<p>El usuario es menor de edad</p>';
}