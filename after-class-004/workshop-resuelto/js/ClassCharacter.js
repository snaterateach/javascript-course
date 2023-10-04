class Caracteres {
    constructor(character) {
        this._id  = parseInt(character._id);
        this.name  = character.name;
        this.image  = character.image;
        this.description  = character.description;
       
    }

    assemble() {
        return    `<div class="col pointer" id="${this._id}" onclick="selectPlayer('${this.name}', '${this.image}')">
                        <figure class="figure">
                        <img src="./img/${this.image}" class="figure-img img-fluid rounded" alt="${this.name}">
                        <figcaption class="figure-caption text-end">${this.name}</figcaption>
                        </figure>
                    </div>`;
    }

}