//= JSON

let row = document.getElementById('listado');

const renderizaListado = ()=>{
    let listadoPersonajes = JSON.parse(localStorage.getItem('personajes'))
    for (let i = 0; i < listadoPersonajes.length; i++) {
        let div = document.createElement('div');
        div.className = 'col-md-4';
        div.innerHTML = `<h2>${listadoPersonajes[i].personaje}</h2>
                          <p><img src="img/${listadoPersonajes[i].imagen}" alt=""></p>`
  
        row.append(div)
    }
} 

    if(localStorage.getItem('personajes')){
        console.log(' tiene el listado')
        renderizaListado()
    
    }else{
        console.log(' inciia el listado')
        localStorage.setItem('personajes', JSON.stringify(personajes))
        renderizaListado()
    }


  

  