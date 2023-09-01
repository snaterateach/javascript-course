// =====================
// REPASO: USO DE OBJETOS
// =====================

/*
    En este desafío vas a recibir un objeto con propiedades pertenecientes a un Auto
    como parámetro de la función "solucion".
    Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad 
    "licencia" (la placa del auto). Si "sí" la tiene, devuelve el objeto original con la propiedad 
    licenciaConducir como "true". Si no la tiene, devuelve el objeto original con la propiedad 
    licenciaConducir como "false".
*/

function solucion(auto){
    if('licencia' in auto){ // in = devuelve un booleano (true/false)
        auto.licenciaConducir = true;
    }else{
        auto.licenciaConducir = false;
    }
}

const auto01 ={
    color: 'Azul',
    marca: 'Renault',
    nroPuertas: 4,
    licencia: 'AAA-1212'
}

const auto02 ={
    color: 'Verde',
    marca: 'VW',
    nroPuertas: 4
}

const auto03 ={
    color: 'Negro',
    marca: 'Toyota',
    nroPuertas: 5,
    licencia: 'BBB-1313'
}

solucion(auto01);
solucion(auto02);
solucion(auto03);
//console.log(auto01);
//console.log(auto02);
//console.log(auto03);
delete auto01.licencia;
console.log(auto01);
