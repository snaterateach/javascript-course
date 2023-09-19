//= JSON


    //Obtenemos el listado de productos almacenado
    const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
    const productosSaved = [];
    //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
    for (const objeto of almacenados)
    productosSaved.push(new Producto(objeto));
    //Ahora tenemos objetos productos y podemos usar sus métodos
    for (const producto of productosSaved)
    producto.sumaIva();

    // Otro ciclo para armar la salida en el navegador
    console.log(productosSaved)
