let form1 = document.getElementById("form1");
let result = document.getElementById("result");


form1.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    //e - pertenece al contexto de JS
    e.preventDefault(); // evitamos el refrescamiento del formulario.
    let userName = document.getElementById("userName").value;
    let userAge = document.getElementById("userAge");
    
    if(userName.length < 3){
        result.innerText = "El nombre del usuario no es correcto"
    }else{
        result.innerText = "Los datos del usuario " + userName + " fueron enviados";
    }

}