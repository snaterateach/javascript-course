//= Sintaxis

//? Crear una promesa
/*new Promise((resolve,reject))=>{
  // tareas a realizar
}
resolve(valor) = si la promesa se cumple
reject(valor) = si la promesa falla
*/

//? Invocar el cambio de Estado de la promesa
  //= Caso: Resolver una promesa
 /* let promesaAceptada = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Promesa aceptada')
    },3000)
    
  });

  console.log('promesa : '+ promesaAceptada);
  
  //= Caso: Rechazar una promesa

  let promesaRechazada = new Promise((resolve,reject)=>{
    reject('Promesa rechazada')
  })
  console.log('promesa : '+ promesaRechazada);
*/
//? Escuchar el cambio de estado de una Promesa (then/catch)

const futuro =(parametro )=>{
  return new Promise((resolve,reject)=>{
    if(parametro){
      resolve('La promesa fue resuelta')
    }else{
      reject('Hay un error')
    }
  })
}

futuro(false)
  .then( resultado => { console.log(resultado)})
  .catch( error => { console.log(error)})