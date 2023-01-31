import {getCarrito} from "./carrito.js";


function list(getCarrito){

    console.log("CARRITO DE LA COMPRA")
    let total = 0;
    let contador = 1;

    getCarrito.forEach(function(article) {
        console.log(contador + ". " + "Producto: " + article.name )
        console.log("Precio:  " + article.price + "€/ud")
        console.log("Cantidad:  " + article.count)
        total += article.price * article.count;
        contador++;
    });
    console.log("---------------------------------")
    console.log("TOTAL:  " + total)
    console.log("---------------------------------")
}

// poner cantidad, prime o no, 

function delete_product(getCarrito){
      
        console.log("Escribe el ID del producto a eliminar: ");
        var stdin = process.openStdin();
    
        stdin.addListener("data", function(entradaPorTeclado) {
           
            for (let i = 0; i < getCarrito.length; i++) {
                if ( getCarrito[i].id === parseInt(entradaPorTeclado.toString())) {
                    getCarrito.splice(i,1);  
                    console.log("Eliminado!")
                }
            } 
              
        list(getCarrito); 
        });         
    }

    function filter_prime(getCarrito){
        const newCarrito = []
        for (const product of getCarrito) {
                 if(product.premium === true) {
                    newCarrito.push(product)
                }
    }
    console.log("---------------------------------")
    console.log("PRODUCTOS PRIME " )
    console.log("---------------------------------")
    list(newCarrito);
}

//Result
list(getCarrito());
filter_prime(getCarrito());
delete_product(getCarrito());
