import {getCarrito} from "./carrito.js";

function hasShippingCosts(Carrito){
    //comprobar long del carrito con la longitud del p prime
}

//document.write("<h1>" + "Carrito de la compra" + "</h1>")
    getCarrito().forEach(function(article) {
console.log(article.id)
        let divOneProduct = document.createElement("div");
        let numberList = document.createElement("ul");
        numberList.innerHTML = "Producto:" +  article.name;

        divOneProduct.appendChild(numberList);

});

    //let div_total = document.write("<div>Total: " + app.total() + "</div>")

 