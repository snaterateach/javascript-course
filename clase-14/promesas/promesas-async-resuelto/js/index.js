//= Sincronía
let nombre = document.getElementById('nombre');
let buscar = document.getElementById('buscar');
let result = document.getElementById('result');

// PASO 2 - Promesa para emular busqueda en BD
// Funcion encargada de buscar todos los usuarios de la BD
function getUserAsync(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { // simulamos un tiempo de respuesta
            let evaluate=true; // devolucion exitosa del servidor
            //let evaluate=true; // error de coneccion 
            if(evaluate){
                resolve([
                    {username:'pedro',email:'pedro@gmail.com'},
                    {username:'juan',email:'juan@gmail.com'}
                ])
            }else{
                reject(' Error conectadonse a la BD!!')
            }
            
        },5000)
    }
    )
}

// PASO 3 - manejar la respuesta
// Construir los datos
function findUser(){
    getUserAsync()
    .then(users => {
        console.log(users);
        // Busca si el usuario existe en la lista devuelta
        const user = users.find(user => user.username === nombre.value);
        if(user){
            result.innerText = `El usuario ${user.username} existe`;
        }else{
            result.innerText = `El usuario ${nombre.value} no existe`;
        }

        //(user) ? (result.innerText = `El usuario ${user.username} existe`) : (result.innerText = `El usuario ${nombre.value} no existe`);
    }) // ejemplo con catch y sin catch
    .catch(err =>{
        console.log(err);
        result.innerText = err;
    })
}

// PASO 1 - asociar evento al boton
buscar.onclick = () => {
    result.innerText = ' Buscando ....'
    findUser();
}


