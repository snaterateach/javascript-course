/*
    Ejemplo 2: 
    Tenemos un arreglo que contiene objetos con propiedades: nombre y edad.
    Se Necesita crear un arreglo que contenga solo adultos (es decir, edad 
    mayor o igual a 18). 
    
    Arreglo ejemplo: 
    const persons = [
    { name: 'Niki', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ]

*/

//? Sin función de orden superior
const aprendiendoFuncionesDos = () =>{
  const persons = [
    { name: 'Niki', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ];

  const fullAge = [];
  for (let index = 0; index < persons.length; index++) {
    if(persons[index].age >= 18){
      fullAge.push(persons[index]);
    }
  }
  return fullAge;
}

console.log(aprendiendoFuncionesDos())






//?función de orden superior

const aprendiendoFuncionesUno = () =>{
  const persons = [
    { name: 'Niki', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
  ];

  const fullAge = persons.filter( person => person.age >= 18);
  return fullAge;
}

console.log(aprendiendoFuncionesUno())