import {getCarrito} from "./carrito.js";
//Listar productos
function list(){
    getCarrito().forEach(function(article) {
        console.log(article.name + " - " + article.price + "€/ud")
    });
}
// poner cantidad, prime o no, 
//Borrar producto
//eliminar por consola
//js html aparte
function delete_product(){
    var borrar = process.stdout.write("Ingrese el id del producto a eliminar:");

    for(let i = 0; i < getCarrito().length; i++){
        if(getCarrito()[i].id === borrar){
            delete(getCarrito()[i].id)
           }
    }
}

//Calcular total
function total(){
    let total = 0;
    getCarrito().forEach(function(article) {
       total += article.price*article.count
    });

    //aplicar descuento en otra funcion
    if(total > 100){
        total = total - (total*0.05)
    }

    console.log("Total :" + total.toFixed(2))
    return total.toFixed(2);
}




function filter_prime(){ 
    console.log("-  PRIME - ")
    const result = getCarrito().filter(product => product.premium === true);

    if(getCarrito().length === result.length){
        console.log("Pedido sin gastos de envío")
    }else{
        console.log("Pedido con gastos de envío")
    }

    list(result);
}


//Result
list()
delete_product();
list();
total();
filter_prime();
