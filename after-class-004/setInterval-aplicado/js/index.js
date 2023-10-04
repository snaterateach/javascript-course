
/*<h1>Cover your page.</h1>
<p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
<p class="lead">
  <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
</p>*/
let slider = document.getElementById('slider');
let index = 0;
const carrusel = function(){
    
    slider.innerHTML = `<h1>${data[index].tittle}.</h1>
                        <p class="lead">${data[index].description}</p>`;
    if(index <2){
        index++;
    }else{
        index = 0; 
    }

}

//carrusel()
setInterval(carrusel,3000)