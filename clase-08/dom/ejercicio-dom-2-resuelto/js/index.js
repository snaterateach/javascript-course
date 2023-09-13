function muestra() {
    let elemento = document.getElementById("adicional");
    elemento.className = "visible";
    
    let enlace = document.getElementById("enlace");
    enlace.className = "oculto";

    document.getElementById("ocultar").className = "visible";
  }

  const oculta =() =>{
    document.getElementById("ocultar").className = "oculto";
    document.getElementById("enlace").className = "visible";
    document.getElementById("adicional").className = "oculto";
  }