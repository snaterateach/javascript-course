let click_1 = document.getElementById("click_1");
let result = document.getElementById("result");


click_1.addEventListener('click', () => {
   
    Toastify({
        text: "Probando toast!",
        duration: 3000,
        gravity: 'top',
        position: 'left',
        onClick: function(){ // Evento de la notifcación
            result.innerText="Has echo click en el toast!"
        }
    }).showToast();
})
