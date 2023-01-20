const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];


//Listar productos
function list(carrito){
    carrito.forEach(function(article) {
        console.log(article.name + " - " + article.price + "€/ud")
    });
}
// poner cantidad, prime o no, 
//Borrar producto
//eliminar por consola
//js html aparte
function delete_product(id){
    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].id === id ){
            carrito.splice(3,1)
           }
    }
}

//Calcular total
function total(carrito){
    let total = 0;
    carrito.forEach(function(article) {
       total += article.price*article.count
    });

    //aplicar descuento en otra funcion
    if(total > 100){
        total = total - (total*0.05)
    }

    console.log("Total :" + total.toFixed(2))
    return total.toFixed(2);
}




function filter_prime(carrito){ 
    console.log("-  PRIME - ")
    const result = carrito.filter(product => product.premium === true);

    if(carrito.length === result.length){
        console.log("Pedido sin gastos de envío")
    }else{
        console.log("Pedido con gastos de envío")
    }

    list(result);
}


//Result
list(carrito)
delete_product(54657);
list(carrito);
total(carrito);
filter_prime(carrito);




//Mostrar en html

function hasShippingCosts(carrito){
    //comprobar long del carrito con la longitud del p prime
}

document.write("<h1>" + "Carrito de la compra" + "</h1>")
    carrito.forEach(function(article) {
        document.write("<ul>")
        document.write("<li>" +article.name + " - " + article.price +"€/ud"+ "</li>")
        document.write("</ul>")
    });

    let div_total = document.write("<div>Total: " + total() + "</div>")


  