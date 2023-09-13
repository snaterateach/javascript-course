const muestra = ()=>{
    let elemento = document.getElementById("adicional");
    elemento.className = "visible";
    let enlace = document.getElementById("enlace");
    enlace.className = "oculto";
    let ocultar = document.getElementById("ocultar");
    ocultar.className = "visible";
}

const oculta= ()=>{
    document.getElementById("enlace").className = "visible";
    document.getElementById("ocultar").className = "oculto";
    document.getElementById("adicional").className = "oculto";

}