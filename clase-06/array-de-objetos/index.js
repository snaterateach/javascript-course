//= Arreglo de Objetos
    //+ Recorrer un arreglo de objetos

   /*const productos = [{ id: 1, producto: "Arroz" },
                    { id: 2,  producto: "Fideo" },
                    { id: 3,  producto: "Pan" }];*/
               //producto = arreglo en singular
               // productos = arreglo
   /* for (const producto of productos) {
        console.log(producto) // muestra la infomacion de TODO el objeto
        console.log(producto.id);
        //console.log(producto.id);
        //console.log(producto.producto);
    }*/

     //+ Recorrer un arreglo de objetos haciendo uso del for
     /*for (let index = 0; index < productos.length; index++) {
        console.log(productos[index].producto)
        
     }*/



    //+ Ejemplo aplicado
    /* class Producto {
        constructor(nombre, precio) {
            this.nombre  = nombre.toUpperCase();
            this.precio  = parseFloat(precio);
            this.vendido = false;
        }
        sumaIva() {
            this.precio = this.precio * 1.21;
        }
    }*/

    function Producto(nombre, precio) {
            this.nombre  = nombre.toUpperCase();
            this.precio  = parseFloat(precio);
            this.vendido = false;
            this.sumaIva = function(){
                this.precio = this.precio * 1.21;
            }
    }
        
   
    const productos = [];
    productos.push(new Producto("arroz", "125"));
    productos.push(new Producto("fideo", "70"));
    productos.push(new Producto("pan", "50"));
    console.log(productos)
    for (const producto of productos){
        producto.sumaIva();
        console.log('producto = ' + producto.nombre + ' precio =' + producto.precio)
    }
        
    
   



     