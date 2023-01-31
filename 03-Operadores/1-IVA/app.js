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

    var vat;
    switch(product.type){
        case "alimentacion":
            vat = 0.1;
            break;
           
        case "libro":
            vat = 0.4;
            break;
           
        default:
           vat = 0.21;
    }

    return  product.count * product.price* vat;
}

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = (subtotal + vat);
  
    console.log("Subtotal:", subtotal.toFixed(2) + "€");
    console.log("IVA:", vat.toFixed(2) + "€");
    console.log("Total:"+ total.toFixed(2) + "€");
  }


var result = printProductPrice(product);
