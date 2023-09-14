
const addNewStudent = ()=>{
    // referencia a los inputs con los datos del nuevo estudiante
   let nombre = document.getElementById("inputName").value;
   let apellido = document.getElementById("inputLastName").value;
   let nota = document.getElementById("inputNote").value;
    // referencia a la lista de estuadiantes
   let listaEstudiantes = document.getElementById("students");

   /*
   <div class="col-md-4">
              <h2>Juan Perez</h2>
              <p>Nota: 6</p>
            </div>
   */
    let nuevoEstudiante = document.createElement("div"); // <div></div>
    nuevoEstudiante.className = "col-md-4";// <div class="col-md-4"></div>
    nuevoEstudiante.innerHTML = ` <h2>${nombre} ${apellido}</h2>
                                <p>Nota: ${nota}</p>`;
    listaEstudiantes.append(nuevoEstudiante);
}