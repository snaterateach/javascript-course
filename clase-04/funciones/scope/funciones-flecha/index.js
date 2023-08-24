//= funciones flecha
  //? Estructura
 /* const nombre = () => {
    // tarea a realizar
  }
*/
//+ Funcion por nombre
function calculaPrecioTotal(precio) {
  let impuestos = 1.16;
  let gastosEnvio = 10;
  let precioTotal = ( precio * impuestos ) + gastosEnvio;
  return precioTotal;
}

//+ Convertir en una funcion por flecha

const calculaPrecioTotal = (precio) =>{
let impuestos = 1.16;
let gastosEnvio = 10;
let precioTotal = ( precio * impuestos ) + gastosEnvio;
return precioTotal;
}

let resultado = calculaPrecioTotal(25);

