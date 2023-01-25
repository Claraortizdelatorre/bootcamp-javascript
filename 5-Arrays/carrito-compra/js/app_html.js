import {getCarrito} from "./carrito.js";

let div =  document.getElementById("app");
let nameProduct = "";
let priceProduct = "";
let countProduct = "";
let buttonProduct = document.getElementById("button-delete");

var array = getCarrito();
    for(let i = 0 ; i <= array.length ; i++){

        let divOneProduct = document.createElement("div");
        let ulProduct = document.createElement("ul");
        nameProduct = document.createElement("p");
        nameProduct.innerHTML = "Producto: " + array[i].name;
        priceProduct = document.createElement("p");
        priceProduct.innerHTML = "Precio: " + array[i].price + "€/ud";
        countProduct = document.createElement("p");
        countProduct.innerHTML = "Cantidad: " + array[i].count;

        //boton
        buttonProduct = document.createElement("button");
        buttonProduct.innerHTML = "Eliminar";
       

        div.appendChild(divOneProduct);
        divOneProduct.appendChild(ulProduct);
        ulProduct.appendChild(nameProduct);
        ulProduct.appendChild(priceProduct);
        ulProduct.appendChild(countProduct);
        ulProduct.appendChild(buttonProduct);
       

        buttonProduct.onclick = function click() {
             divOneProduct.remove();
        };
    }




 