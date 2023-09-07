// METODO DATE
console.log(new Date());

// Convenciones
// - los meses a partir del 0 (0 = enero, 11 = diciembre)
// - los dias a partir del 1 ( 1 = lunes, 7 = domingo)

// Fecha Actual
const hoy = new Date();
const anio = hoy.getFullYear();
console.log(anio);
const mes = hoy.getMonth();
console.log(mes);
const dia = hoy.getDay();
console.log(dia);

// Definiendo una fecha
const hoyDos = new Date("December 17,2021");
console.log(hoyDos);
const horaDos = hoyDos.getHours();
const hora = hoy.getHours();
console.log(hora)
console.log(horaDos);
const minutos = hoy.getMinutes();
const segundos = hoy.getSeconds();
console.log(minutos);
console.log(segundos);

// fecha timestamp o Unix 872817240000 (formatos de fecha)
const fechaUnix = new Date(872817240000);
console.log(fechaUnix)


// Ejemplo Aplicado

const MESES = [
    "Enero", "Febrero", "Marzo","Abril", "Mayo",
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre" 
];

const fechaMes= new Date();
console.log(fechaMes);
console.log(fechaMes.getMonth());
console.log(MESES[fechaMes.getMonth()]);
