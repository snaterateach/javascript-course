//? Ejemplo - Listar los episodios de los simpsoms

let data_result = document.getElementById('data_result');
let data_example = document.getElementById('data_example');
let show_data = document.getElementById('show_data');

const getData = () =>{
    let loader = document.getElementById('loader');
    data_example.innerHTML = '';
    loader.className = 'loader-show';

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            loader.className = 'loader-hide';
            resolve(data);
        },5000)
        
    })
}

show_data.onclick = ()=>{
    getData()
    .then( response =>{
        console.log(response);
        response.forEach(element => {
            const {name, description,thumbnailUrl, rating } = element;
            let div = document.createElement('div');
            let card = document.createElement('div');
            div.className = "col s12 m6";
            card.className="card";
            card.innerHTML = `
                    <div class="card-image">
                            <img src="${thumbnailUrl}">
                            <span class="card-title">${name}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light blue" style="text-align:center">${rating}</a>
                        </div>
                        <div class="card-content">
                            <p>${description}</p>
                        </div>`;
            div.append(card);
            data_result.append(div)
        });
    })
    .catch(err=>{
        console.log(' Error: ', err)
    })
}