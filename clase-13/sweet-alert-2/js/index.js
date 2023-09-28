let username = document.getElementById("user");

let userResult = localStorage.getItem('username');

if(!userResult){ // No ha idinicado sesion
    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter login and password`)
          }
          return { login: login, password: password }
        }
      }).then((result) => { 
        /*Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password} 
        `.trim())*/ 
        localStorage.setItem('username',result.value.login)
        username.innerHTML = `Usuario Logeado:<b>${result.value.login}</b> `
      })
}else{
    username.innerHTML = `Usuario Logeado:<b>${userResult}</b> `
} 


