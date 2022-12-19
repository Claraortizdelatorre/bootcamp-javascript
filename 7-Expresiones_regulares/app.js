//  Validar IBAN    

/** Caso 1 **/
// let iban1 = "ES6600190020961234567890";

// let patternIban1 = /^[A-Z]{2}\d{22}$/;

// console.log(patternIban1.test(iban1));

/** Caso 2 **/
let ibanValues = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
let patternIbanValues = /^[A-Z]{2}(\d{2}\s?)(\d{4}\s?)(\d{4}\s?)(\d{4}\s?)(\d{4}\s?)\d{4}$/;

ibanValues.forEach(value => {
    console.log(patternIbanValues.test(value));
})

// /** Caso 3 **/
let iban1 = "ES6600190020961234567890";
let patternIban1 = /^([A-Z]{2})(\d{2})\d{20}$/;

console.log(patternIban1.exec(iban1));





// // Validar matrículas de coche
// /** Caso 1 y 2 **/
let carValues = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

let patternCar = /^(\d{4})(\s|-?)([A-Z]{3})$/;

carValues.forEach(value => {
    console.log(`Regex match with ${value}?`, patternCar.test(value));
    console.log(patternCar.exec(value));
})