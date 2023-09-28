let firstName = document.getElementById('firstName');
let lastName= document.getElementById('lastName');
let username= document.getElementById('username');
let email= document.getElementById('email');
let address= document.getElementById('address');
let zip= document.getElementById('zip');

let formulario= document.getElementById('register');
formulario.addEventListener('submit', register);

function register(e){
    e.preventDefault();
    Swal.fire({
        title: '¿ Desea guardar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
      }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
          Swal.fire('Registro Guardado!', '', 'success');
          firstName.value="";
          lastName.value="";
          username.value="";
          email.value="";
          address.value="";
          zip.value="";
        } else if (result.isDenied) {
          Swal.fire('Los cambios no fueron guardado', '', 'info')
        }
      })
}
