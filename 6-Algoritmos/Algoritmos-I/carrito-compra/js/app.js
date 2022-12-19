// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

//Form
let form = document.getElementById("list");


//Show list product
function showProducts(){

    let divProduct = document.createElement("div")
    divProduct.setAttribute("class", "div-product")
    let numberList = "";

   for(let i = 0 ; i < products.length; i++){
        let divOneProduct = document.createElement("div");
        divOneProduct.setAttribute("class", "div-one-product")
        numberList = document.createElement("label");
        numberList.innerHTML = i+1 + ". "+ products[i].description + " - " + products[i].price + "€ " + " / ud.";
        let inputProducts = document.createElement("input")
        inputProducts.setAttribute("id", "input-unit-" + i);
        inputProducts.setAttribute("type", "number");
        
       
        form.appendChild(divProduct);
        divProduct.appendChild(divOneProduct);
        divOneProduct.appendChild(numberList);
        divOneProduct.appendChild(inputProducts);
    }   
}

showProducts();

function subtotal(){
    let total = 0;
    
    for(let i=0; i < products.length; i++){
        let inputValue = document.getElementById("input-unit-" + i).value

        if(inputValue != ""){
            total += products[i].price * parseInt(inputValue);
           
        }
    }

    return total;


}

function iva(){

    let iva = 0
    for(let i=0; i < products.length; i++){
        let inputValue = document.getElementById("input-unit-" + i).value

        if(inputValue != ""){
            if(products[i].tax === REGULAR_TYPE){
                iva += (products[i].price * parseInt(inputValue)) * (REGULAR_TYPE/100)

            }else if(products[i].tax === LOWER_TYPE){
                iva += (products[i].price * parseInt(inputValue)) * (LOWER_TYPE/100)

            }else if(products[i].tax === EXEMPT_TYPE){
                iva += (products[i].price * parseInt(inputValue)) * (EXEMPT_TYPE/100)
            }
        }
    }
        return iva;
}

//Result
function total(){
    let total = subtotal() +  iva();
    document.getElementById("subtotal").innerHTML =" Subtotal:  " + subtotal().toFixed(2) + "€";
    document.getElementById("iva").innerHTML =" IVA:  " + iva().toFixed(2) + "€";
    document.getElementById("total").innerHTML =" TOTAL:  " + total.toFixed(2) + "€";  
}

//Click
document.getElementById("calculate").addEventListener("click", total);