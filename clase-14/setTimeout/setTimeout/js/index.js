//= ASincronía
let nombre = document.getElementById('nombre');
let buscar = document.getElementById('buscar');
let result = document.getElementById('result');

buscar.onclick =()=>{
    result.innerText =`Buscando el usuario ...`;

    setTimeout(()=>{
        result.innerText = `El usuario ${nombre.value} no existe!!`;
    },5000)
}