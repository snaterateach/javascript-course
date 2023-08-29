// Estructura
 /* function NombreEnMayuscula(parametro1, parametro2, ...){
    this.parametro1 = parametro1;
    this.parametro2 = parametro2;

  }*/
/*
function NombreEnMayuscula(parametro1, parametro2, ..., parametroN) {
  this.parametro1 = parametro1;
  this.parametro2   = parametro2;
  this.parametroN  = parametroN;
}

const variable = new NombreFuncion(valor1, valor2, ..., valorN);

*/

/*function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

let car01 = new Car('Eagle', 'Tsi', 1993);
let car02 = new Car('Nissan', '300ZX', 1992);
let car03 = new Car('Mazda', 'Miata', 2000);

console.log(car01);
console.log(car02);
console.log(car03);*/

function Car(brand, model, year,owner) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.owner = owner;
}


function Person(name, age, lastname) {
  this.name = name;
  this.age = age;
  this.lastname = lastname;
}

let randalf = new Person('Randalf',100,'cualquier cosa');
let kenny = new Person('Kenny',100,'apellido kenny');

let car01 = new Car('Eagle', 'Tsi', 1993, randalf);
let car02 = new Car('Nissan', '300ZX', 1992, randalf);
let car03 = new Car('Mazda', 'Miata', 2000, kenny);


console.log(car01);
console.log(car02);
console.log(car03);

console.log(car01.owner.name);



