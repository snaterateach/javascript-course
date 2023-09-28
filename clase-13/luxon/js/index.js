let fecha_local = document.getElementById("fecha_local");
let fecha_full_time= document.getElementById("fecha_full_time");

const DateTime = luxon.DateTime; // Arrancar con los formatos de fecha
const Info = luxon.Info;
// Mostrar la fecha actual
const fecha_actual = DateTime.now();
console.log(fecha_actual);
console.log(fecha_actual.c)
console.log(fecha_actual.day);

fecha_local.innerText = fecha_actual.toString();
fecha_full_time.innerText = fecha_actual.toLocaleString(DateTime.DATETIME_FULL)

// Mese del Año
let meses_anio = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let meses = document.getElementById("meses");
let meses_array = Info.months();
console.log(meses_array);
let meses_html = "";

for (let index = 0; index < meses_array.length; index++) {
    meses_html += `<option value="${index}">${meses_array[index]}</option>`
}
meses.innerHTML = meses_html;

// Dias de la semana
let semanas = document.getElementById("semanas");
let semanas_array = Info.weekdays();
console.log(meses_array);
let semanas_html = "";

for (let index = 0; index < semanas_array.length; index++) {
    semanas_html += `<option value="${index}">${semanas_array[index]}</option>`
}
semanas.innerHTML = semanas_html;
