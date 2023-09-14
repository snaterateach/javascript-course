
const addNewStudent = ()=>{
    let listaEstudiantes = document.getElementById('students');

    let nombre = document.getElementById('inputName').value;
    let apellido = document.getElementById('inputLastName').value;
    let nota = document.getElementById('inputNote').value;

    let nuevoEstudiante = document.createElement('div');
    nuevoEstudiante.className = 'col-md-4';

    nuevoEstudiante.innerHTML = `<h2>${nombre} ${apellido}</h2>
                                 <p>Nota: ${nota}</p>`;
    
    listaEstudiantes.append(nuevoEstudiante);

}