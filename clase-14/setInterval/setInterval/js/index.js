//= ASincronía

let reloj = document.getElementById('reloj');
let detener = document.getElementById('detener');
let reiniciar = document.getElementById('reiniciar');

const imprimeReloj = ()=>{
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    reloj.innerText = `${hora}:${minutos}:${segundos}`;
}

let fin = setInterval(imprimeReloj,1000);

detener.onclick = ()=>{
    clearInterval(fin);
}

reiniciar.onclick = ()=>{
    fin = setInterval(imprimeReloj,1000);
}
