let totalLinks = document.getElementsByTagName("a");
console.log(totalLinks.length);
document.getElementById("totalLinks").innerHTML =  totalLinks.length;

let parrafo = document.getElementsByTagName("p");
console.log(parrafo[2]);
let linksparrafo = parrafo[2].getElementsByTagName("a");
console.log(linksparrafo);

document.getElementById("paragrahLinks").innerHTML = linksparrafo.length;

document.getElementById("paragrahTotal").innerHTML = linksparrafo.length