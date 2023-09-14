// Eventos para elementos del formulario y body
let userName = document.getElementById("userName");
let result = document.getElementById("result");

userName.onkeyup = () =>{
    result.innerText = "El usuario soltó la tecla"
}

userName.onkeydown = () =>{
    result.innerText = "El usuario presionó la tecla"
}