// e ( pertenece al contexto de javascript )
const getValues = (e)=>{
    console.log (e.target); // <div id = "main" class = "sb js node"> <span> texto de prueba </span> </div>
    console.log(e.target.id);//main
    console.log(e.target.tagName);//DIV
    console.log(e.target.nodeName);//DIV
    console.log(e.target.classList);// ["sb", "js", "node", value: "sb js node"]
    console.log(e.target.className);//sb js node
    console.log (e.target.innerHTML); // <span> texto de prueba </span>
    console.log (e.target.innerText); // Texto de prueba

}


document.getElementById("main").onclick = getValues;

