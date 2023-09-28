

const btn = document.querySelector('#click_1')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'Haz clickeado el botón!',
        icon: 'success',
        //confirmButtonText: 'OK',
        //showCancelButton: true,
        position: 'center-end',
        timer: 1500
})
})
