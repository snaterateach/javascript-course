


let totalLinks = document.getElementsByTagName("a");
console.log(totalLinks);
document.getElementById("totalLinks").innerHTML = totalLinks.length; 

let parragrah = document.getElementsByTagName("p");
console.log(parragrah);
let linksParragrah = parragrah[2].getElementsByTagName("a")
console.log(linksParragrah)
document.getElementById("paragrahLinks").innerHTML = linksParragrah.length;

document.getElementById("paragrahTotal").innerHTML = parragrah.length;