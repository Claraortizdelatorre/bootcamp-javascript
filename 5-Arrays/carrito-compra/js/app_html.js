import {getCarrito} from "./carrito.js";

let div =  document.getElementById("app");
let nameProduct = "";
let priceProduct = "";
let countProduct = "";
let buttonProduct = "";

    getCarrito().forEach(function(article) {
        console.log(article.name)
        let divOneProduct = document.createElement("div");
        let ulProduct = document.createElement("ul");
        nameProduct = document.createElement("p");
        nameProduct.innerHTML = "Producto: " + article.name;
        priceProduct = document.createElement("p");
        priceProduct.innerHTML = "Precio: " + article.price + "€/ud";
        countProduct = document.createElement("p");
        countProduct.innerHTML = "Cantidad: " + article.count;

        //boton
        buttonProduct = document.createElement("button");
        buttonProduct.setAttribute('onclick', borrar(divOneProduct));
        buttonProduct.innerHTML = "Eliminar";


        //form.appendChild(divProduct);
        div.appendChild(divOneProduct);
        divOneProduct.appendChild(ulProduct);
        ulProduct.appendChild(nameProduct);
        ulProduct.appendChild(priceProduct);
        ulProduct.appendChild(countProduct);
        ulProduct.appendChild(buttonProduct);


});

function borrar(divOneProduct) {

    div.removeChild(divOneProduct);
  
   };



 