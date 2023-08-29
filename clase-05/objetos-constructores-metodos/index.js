/*function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.displayCar = function () { // metodo
        let result = 'Este es un auto del año: ' + this.year + ' Su modelo es : ' + this.model;
        console.log(result);
    }
}*/

function Car(brand, model, year, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owner= owner;
    this.displayCar = displayDetails
}
function Person(nombre, year){
    this.nombre = nombre;
    this.year = year;
}

function displayDetails() {
    let result = 'Este es un auto del año: ' + this.year + ' Su modelo es : ' + this.model + ' nacimiento: '+this.owner.year;
    // this.owner.year
    console.log(result);
}
let randalf = new Person('Randalf',1994);
let car01 = new Car('Eagle', 'Tsi', 1993, randalf);
let car02 = new Car('Nissan', '300ZX', 1992, randalf);

car01.displayCar();



