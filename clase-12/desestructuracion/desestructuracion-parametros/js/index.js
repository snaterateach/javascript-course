//? Ejemplo 
let data_result = document.getElementById('data_result')
let show_data = document.getElementById('show_data')

show_data.onclick = ()=>{
  if(data.length>0){
    data.forEach( element =>{
      getData(element);
    })
  }
}

//const getData = (element) =>{
  const getData = ({ name,body}) =>{
  
  //let { name,body} = element;
  let card = document.createElement("div");
  card.className="col s12 m6";
  card.innerHTML = `<div class="card-content">
          <span class="card-title">${name}</span>
          <p>${body}</p>
        </div>`;
        data_result.append(card)
}