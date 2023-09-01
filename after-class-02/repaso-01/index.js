// =====================
// REPASO: FUNCIONES
// =====================

/*
    Escriba una función con el nombre de esVocal() que tome un carácter , devuelva 
    True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en 
    caso contrario.
*/

function esVocal(vocal){ // declarativa
    if(vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u' ){
        return true;
    }else if(vocal === 'A' || vocal === 'E' || vocal === 'I' || vocal === 'O' || vocal === 'U' ){
        return true;
    }else{
        return false;
    }
}

let respuesta = esVocal('p');
console.log(respuesta);


const esVocal = (vocal) =>{ // funcion flecha
    vocal = vocal.toLowerCase();

    if(vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u' ){
        return true;
    }

    return false;
}

const esVocal = (vocal) =>{ // funcion flecha
    vocal = vocal.toLowerCase();

    switch (vocal) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }

}




