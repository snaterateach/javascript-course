//= Sincronía
let nombre = document.getElementById('nombre');
let buscar = document.getElementById('buscar');
let result = document.getElementById('result');


function getUserAsync() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if(false){
                resolve([
                    {
                        username: 'pedro', email: 'pedro@gmail.com'
                    },
                    {
                        username: 'juan', email: 'juan@gmail.com'
                    }
                ])
            }else{
                reject(' Error conectanose a la BD')
            }
           
        },5000);
    })
       
}

function findUser(){
    getUserAsync()
    .then( users =>{
        const user = users.find(user => user.username === nombre.value);
        if(user){
            result.innerText = `El useraio ${nombre.value} existe`
        }else{
            result.innerText = `El useraio ${nombre.value} NO existe`
        }
    })
    .catch( err =>{
        result.innerText = err;
    })
}


buscar.onclick = ()=>{
    result.innerText = 'Buscando ... ';
    findUser()
}