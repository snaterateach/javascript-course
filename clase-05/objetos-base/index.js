//? Contruccion de un Objeto

/*const nombreVraiable = {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
}*/
//TODO Formas de obtener los valores de un objeto:
//? notacion punto
//? corchetes
//? arbol

const producto = {
    nombre: 'manzana',
    categoria: 'frutas',
    precio: 1.99
}

console.log(producto);
console.log(producto.nombre);
console.log(producto["nombre"]);


//TODO AGREGAR PROPIEDAD NUTRIENTES
const productoDos = {
    nombre: 'manzana',
    categoria: 'frutas',
    precio: 1.99,
    nutrientes:{
        carbohidratos: 0.95,
        grasas: 0.3,
        proteina: 0.2
    }
}
console.log(productoDos);
console.log(productoDos.nutrientes.grasas);
console.log(productoDos["nutrientes"]["grasas"]);
console.log(productoDos["nutrientes"].grasas);


//TODO asignar valores a una propiedad

productoDos.nutrientes.grasas = 1;
console.log(productoDos)


//TODO Valores en variables
const nombre = 'manzana';
const categoria = 'frutas';
const precio=  1.99;

const productoTres = {
    nombre: nombre,
    categoria: categoria,
    precio: precio,
    nutrientes:{
        carbohidratos: 0.95,
        grasas: 0.3,
        proteina: 0.2
    }
}



//TODO Valores en variables - Abreviado (ES6)
const productoCuatro = {
    nombre,
    categoria,
    precio,
    nutrientes:{
        carbohidratos: 0.95,
        grasas: 0.3,
        proteina: 0.2
    }
}

console.log(productoCuatro)