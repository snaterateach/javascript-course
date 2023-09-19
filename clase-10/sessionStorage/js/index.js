//= SessionStorage
    //* Crear el storage
    sessionStorage.setItem('seleccionados',[1,2,3]);
    sessionStorage.setItem('entero',3);
    sessionStorage.setItem('abecedario','a');

    //* Obtener valores del storage
    let lista = sessionStorage.getItem('seleccionados');
    console.log(lista);
    let lista2 = sessionStorage.getItem('seleccionados').split(',');
    console.log(lista2)
//= Recorrer el Storage

    for (let index = 0; index < sessionStorage.length; index++) {
        let clave = sessionStorage.key(index);
        console.log(clave);
        console.log('valor = ', sessionStorage.getItem(clave));
        
    }

//= Eliminar datos del storage
sessionStorage.removeItem('entero');
sessionStorage.clear();
