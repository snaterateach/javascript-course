// Obtenemos las referencias
let contactos = document.getElementById("contactos");
let guardar = document.getElementById("guardar");
let eliminar = document.getElementById("eliminar");
let eliminarTodos = document.getElementById("eliminarTodos");



// Guardar datos en el storage
const guardarDato = () =>{
    // Obtenemos los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    // Guardamos en cache
    localStorage.setItem(nombre, movil);
    // Limpiamos los datos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    // Actualizar lista de contactos en el navegador
    actualizarDatos();
}


// Eliminar un contacto del Storage
const eliminarDato = ()=> {
    const nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

// Eliminar todos los datos del storage
const eliminarTodo = ()=> {
    localStorage.clear();
    actualizarDatos();
}

// Actualiza los datos del listado
const actualizarDatos = ()=> {

    contactos.innerHTML = "";
    if (localStorage.length === 0) {
        contactos.innerHTML += '<li class="list-group-item">Vacío</li>';
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            let item = document.createElement("li");
            item.className = "list-group-item d-flex justify-content-between align-items-start";
            item.innerHTML = ` <div class="ms-2 me-auto">
                            <div class="fw-bold"></div>
                            ${key}
                            </div>
                            <span class="badge bg-primary rounded-pill">${localStorage.getItem(key)}</span>`;
            contactos.append(item)
        }
    }
}

// Asociamos los eventos
guardar.onclick = guardarDato;
eliminar.onclick = eliminarDato;
eliminarTodos.onclick = eliminarTodo;

actualizarDatos();