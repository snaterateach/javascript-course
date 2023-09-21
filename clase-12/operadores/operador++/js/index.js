//? Ejemplo 
// Sumar los numeros del 0 a un numero dado por el usuario
let input_number = document.getElementById("input_number");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.onclick = () =>{
    let number = input_number.value;
     let suma = 0;
     let suma_2 = 0;
        let suma_3 = 0;
    for (let index = 0; index < number; index++) {
        suma = suma + 1;
        suma_2 +=1;
        suma_3++;
    }
    result.innerHTML = `<p>LA primera suma es: ${suma}</p>
                        <p>LA segunda suma es: ${suma_2}</p>
                        <p>LA tercera suma es: ${suma_3}</p>`;
    
}