let row = document.getElementById("listado");

const rederizarListado = () =>{
    let listadoPersonajes = JSON.parse(localStorage.getItem('personajes'));
    console.log(listadoPersonajes)
    for (let index = 0; index < listadoPersonajes.length; index++) {
        /*<div class="col-md-4">
            <h2>Nombre del personaje</h2>
            <p><img src="" alt=""></p>
          </div>*/
        console.log(listadoPersonajes[index])
        let div = document.createElement('div');
        div.className = "col-md-4";
        div.innerHTML = `<h2>${listadoPersonajes[index].personaje}</h2>
                         <p><img src="img/${listadoPersonajes[index].imagen}" alt=""></p>`;
        row.append(div);
    }
}

// verificar si existe el listado de personajes
if(localStorage.getItem('personajes')){
    console.log('tiene el listado');
    console.log(localStorage.getItem('personajes'));
    
}else{
    console.log('No tiene el listado');
    localStorage.setItem('personajes',JSON.stringify(personajes));
    
} 

rederizarListado();
