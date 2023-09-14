// Eventos para elementos <input>, <select>, <textarea>

let userName = document.getElementById("userName");
let userSelect = document.getElementById("userSelect");
let result = document.getElementById("result");

userName.onchange = () =>{
    result.innerText = userName.value;
}

userSelect.onchange = () =>{
    result.innerText = userSelect.value;
}

