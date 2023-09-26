//? Ejemplo 

let nombre = document.getElementById('nombre');
let nota = document.getElementById('nota')
let show_data = document.getElementById('show_data')
let result = document.getElementById('result');
const statusNota = ['aprobado', 'reprobado'];


show_data.onclick = ()=>{
    const [a,r] = statusNota;
    if(nota.value >=4){
        //result.innerText = `${nombre.value} fue ${statusNota[0]}`;
        result.innerText = `${nombre.value} fue ${a}`;
    }else{
        //result.innerText = `${nombre.value} fue ${statusNota[1]}`;
        result.innerText = `${nombre.value} fue ${r}`;
    }
}