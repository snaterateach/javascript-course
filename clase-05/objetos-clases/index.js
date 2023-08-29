// Estructura

/*class NombreClase{
    constructor(parametros){
        this.parametros = parametros
    }

    metodosUno(){
        // tarea
    }
    metodoDos(){
        // tarea
    }
    metodosTres(){
        // tarea
    }
}*/
// Declaración de clase
/*class Animal{
    hablar(){
        return "Cuak";
    }
}

const pato = new Animal();
console.log(pato.hablar());
*/
// Creación de una instancia u objeto
class InformacionUsuario{
    constructor(name,apellido,age){
        this.name = name;
        this.apellido = apellido;
        this.age = age;
    }

    fullname(){
        return this.name + ' ' + this.apellido;
    }

    getYear(){
        return 'fecha de nacimiento es: ' +  this.age;
    }

}

let user01 = new InformacionUsuario('Juan', 'Perez', 1994);
console.log(user01.fullname());
console.log(user01.getYear());



