let guardar = document.getElementById("guardar");
let eliminar = document.getElementById("eliminar");
let eliminarTodos = document.getElementById("eliminarTodos");
let contactos = document.getElementById("contactos");

const guardarDato = ()=>{
    // Obtener datos del formulario
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    //Guardar en cache
    localStorage.setItem(nombre,movil);
    document.getElementById("nombre").value="";
    document.getElementById("movil").value = "";
    actualizarDatos();
}

const actualizarDatos = ()=>{
    contactos.innerHTML = "";
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        let item = document.createElement("li");// <li></li>
        item.className ="list-group-item d-flex justify-content-between align-items-start";
        item.innerHTML = ` <div class="ms-2 me-auto">
                                <div class="fw-bold"></div>
                                ${key}
                            </div>
                            <span class="badge bg-primary rounded-pill">
                            ${localStorage.getItem(key)}
                            </span>`;
        contactos.append(item);
        
    }
}

const eliminarDato = ()=>{
    const nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

const eliminarTodo= ()=>{
    localStorage.clear();
    actualizarDatos();
}

guardar.onclick = guardarDato;
eliminar.onclick = eliminarDato;
eliminarTodos.onclick = eliminarTodo;

actualizarDatos();