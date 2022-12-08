/*
Vamos a calcular el total de la compra de un producto 
(su precio multiplicado por la cantidad) y aplicar el IVA del 21% excepto para los siguientes 
tipos de producto:

"alimentacion": 10%
"libro": 4%
*/

const product = { 
    count: 10, 
    price: 12.55, 
    type: "ropa" 
};

function getTotal(product){
    
    return  product.count <= 0 ? '0' : (product.count*product.price);
}

function getTotalVat(product){

    switch(product.type){
        case "alimentacion":
            return (product.price * 0.1);
        case "libro":
            return  (product.price* 0.04);
        default:
            return (product.price * 0.21);
    }
}

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = (subtotal + vat);
  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:"+ total + "€");
  }


var result = printProductPrice(product);
