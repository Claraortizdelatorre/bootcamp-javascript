/** hasId */
/*Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).*/
const object = {
    id: 4451234,
    name: "Javier",
    surname: "Ortiz",
    age: 35,
};

const object2 = {
    name: "María",
    surname: "Panizo",
    age: 25,
}

const hasId = ({ id }) => id ? true : false;

console.log(hasId(object));
console.log(hasId(object2));

//Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

const numbers = ["Uno", "Dos", "Tres", "Cuatro"];

const head = ([ first ]) => first;
console.log(head(numbers));

//Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.

const tail = ([ , ...restItems ]) => restItems;
console.log(tail(numbers));

//swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.


const swapFirstToLast = ([ first , ...rest ]) => [...rest , first];
console.log(swapFirstToLast(numbers));



//  excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.
const objectWithId = {
    id: 2876,
    quantity: 5,
    name: "hola",
    department: "que tal"
};

const excludedId = ({ id, ...rest }) => rest;
console.log(excludedId(objectWithId));

//wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.

const words = ["Andaluz", "Pera", "Cacahuete", "Kiwi", "Amiga"];

const wordsStartingWithA = words => words.filter(word => word.startsWith("A"));
console.log(wordsStartingWithA(words));


//concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.
const concat = words => words.join(" | ");
console.log(concat(words));

//multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
const number = [1, 4, 5, 2];

const multArray = (x, arr) => {
    return arr.map(element => element * x);
}

console.log(multArray(2, number));


//calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.

const calcMult = (...num) => {
    return num.reduce((previous, current) => previous * current); 
}

console.log(calcMult(5, 2, 3));


/*EJERCICIOS OPCIONALES*/ 