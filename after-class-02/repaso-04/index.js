// ===================================================
// REPASO: USO DE FUNCIONES CONSTRUCTORAS Y CLASES
// ===================================================

/*
    Define un objeto, mediante una expresión, que tenga dos propiedades: 
    precio y descuento y un método neto. El método calculará el precio con 
    el descuento aplicado.
    Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá 
    como resultado 360 400*(1 - 10/100).
*/

function Vestido(precio,descuento){
    this.precio = precio;
    this.descuento = descuento;
    this.neto = function(){
        return this.precio * (1 - this.descuento/100);
    }
}

let vestido01 = new Vestido(23,15);
let neto= vestido01.neto();

console.log(vestido01);
console.log(neto)
