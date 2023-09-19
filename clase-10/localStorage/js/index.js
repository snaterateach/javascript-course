//= Localstorage
//*  crear el storage
/*localStorage.setItem('bienvenido', 'A la clase de Storage');
localStorage.setItem('unBooleano', true);
*/
//* Obtener informacion del storage
let bienvenido = localStorage.getItem('bienvenido');
let bandera = localStorage.getItem('unBooleano');
console.log(bandera);

let result = document.getElementById("result");
result.innerHTML = `<ul>
                        <li>${bienvenido}</li>
                        <li>${bandera}</li>
                    </ul>`;