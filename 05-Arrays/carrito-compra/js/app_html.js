import { getCarrito } from "./carrito.js";

let cantidad_subtotal = 0;
let p_premium = true;
let div = document.getElementById("app");
let div_r = document.getElementById("result");
let nameProduct = "";
let priceProduct = "";
let countProduct = "";
let buttonProduct = document.getElementById("button-delete");
//recorrrer la lista en esa lista
function product() {
  getCarrito().forEach(function (product) {
    let divOneProduct = document.createElement("div");
    let ulProduct = document.createElement("ul");
    nameProduct = document.createElement("p");
    nameProduct.innerHTML = "Producto: " + product.name;
    priceProduct = document.createElement("p");
    priceProduct.innerHTML = "Precio: " + product.price + "€/ud";
    cantidad_subtotal += product.price * product.count;
    countProduct = document.createElement("p");
    countProduct.innerHTML = "Cantidad: " + product.count;

    if (product.premium != true) {
      p_premium = false;
    }

    //boton
    buttonProduct = document.createElement("button");
    buttonProduct.innerHTML = "Eliminar";

    div.appendChild(divOneProduct);
    divOneProduct.appendChild(ulProduct);
    ulProduct.appendChild(nameProduct);
    ulProduct.appendChild(priceProduct);
    ulProduct.appendChild(countProduct);
    ulProduct.appendChild(buttonProduct);

    /*click eliminar*/
    buttonProduct.onclick = function click() {
      cantidad_subtotal -= product.price * product.count;
      divOneProduct.remove();

      if (product.premium != true) {
        p_premium = false;
      } else {
        p_premium = true;
      }
      clear();
      result();
    };
  });
}

function result() {
  
  div_r = document.getElementById("result");
  let divResult = document.createElement("div");
  let ulResult = document.createElement("ul");
  let espacio = document.createElement("p");
  espacio.innerHTML = "----------------------------------------";
  let subtotal = document.createElement("p");
  subtotal.innerHTML = "Subtotal : " + cantidad_subtotal.toFixed(2);
  let total = document.createElement("p");
  total.innerHTML = "Total : " + descuento(cantidad_subtotal).toFixed(2);
  let descuento_text = document.createElement("p");
  let envio = document.createElement("p");
  envio.innerHTML = prime(p_premium);

  if (descuento(cantidad_subtotal) < cantidad_subtotal) {
    descuento_text.innerHTML = "Descuento del 5%";
  }

  div_r.appendChild(divResult);
  divResult.appendChild(ulResult);
  ulResult.appendChild(espacio);
  ulResult.appendChild(subtotal);
  ulResult.appendChild(total);
  ulResult.appendChild(descuento_text);
  ulResult.appendChild(envio);
}

function clear() {
    document.getElementById("result").innerHTML = "";
}

function descuento(cantidad) {
  if (cantidad > 50) {
    return (cantidad = cantidad - cantidad * 0.05);
  } else {
    return cantidad;
  }
}

function prime(premium) {
  if (premium === true) {
    return "Gastos de envío 0";
  } else {
    return "Con gastos de envío";
  }
}



product();
result();