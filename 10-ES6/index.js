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


/*-------------------------------EJERCICIOS EXTRA-------------------------*/ 

//swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.

const newArr = ["Clara", 99, "Ortiz", 67];

const swapFirstSecond = ([ first, second, ...rest ]) => [ second, first, ...rest ];
console.log(swapFirstSecond(newArr));

//firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.

const arrOfStr = ["Patata", "Perro", "Pueblo"];
const arrOfStr2 = ["Patata", "Hola", "Pueblo"];

const firstEqual = (char, strings) => strings.every(string => string.startsWith(char));

console.log(firstEqual( "P" , arrOfStr));
console.log(firstEqual( "P" , arrOfStr2));

//longest que admita múltiples arrays como entrada, y devuelva el array más largo.

const arr1 = [21, 45, 0, 2, 78];
const arr2 = ["1", "2", "3", "4", "5", "6"];

const longest = (...arr) => arr.reduce((previous, current) => previous.length > current.length ? previous : current); 

console.log(longest(arr1, arr2));

//searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

const str1 = "hola que tal como estas hoy";

const searchInStringV1 = (str, char) => {
    char = char.toLowerCase();
    str = str.toLowerCase();
    return Array.from(str).reduce((result, letter) => letter === char ? result + 1 : result, 0);
}

console.log(searchInStringV1(str1, "e"));
console.log(searchInStringV1(str1, "T"));

//Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce

const str2 = "hola que tal como estas hoy";

const searchInStringV2 = (str, char) => {
    char = char.toLowerCase();
    str = str.toLowerCase();
    return Array.from(str).filter(letter => letter === char).length;
}

console.log(searchInStringV2(str2, "o"));
console.log(searchInStringV2(str2, "E"));

//sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.

const str3 = "hola que tal como estas hoy";

const sortCharacters = (str) => {
    return Array.from(str.toLowerCase())
        .filter(a => a !== ' ')
        .sort((a, b) => a > b ? 1 : -1);
}

console.log(sortCharacters(str3));

//shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

const shout = (...words) => {
    return words.map(word => `¡${word.toUpperCase()}!`);
}

console.log(shout("manzana", "perro", "gato"));

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
  ];

// A
const getTax = (tax, products) => products.map(product => ({...product, tax: (product.price * 0.21).toFixed(2)}));

console.log(getTax("tax", shoppingCart));

// B
const orderShoppingCart = (products) => products.sort((a, b) => a.units < b.units ? 1 : -1);

console.log(orderShoppingCart(shoppingCart));

// C
const getSubtotal = (product) => {
    return product.filter((product => product.category === "Droguería"))
                    .reduce((sum, product) => sum + (product.price * product.units), 0);
}

console.log(getSubtotal(shoppingCart));

// D 

const getOrderedList = (products) => {
    return products.sort((a, b) => a.category > b.category ? 1 : -1)
                    .map((product => (product.product + ": " + ((product.price * product.units) * 0.21).toFixed(2) + "€")));
}

console.log(getOrderedList(shoppingCart));

