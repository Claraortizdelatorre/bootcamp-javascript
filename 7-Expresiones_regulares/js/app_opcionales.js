
/// OPCIONALES

// Extraer imágenes de un fichero HTML
/** Caso 1 */
let imgUrl = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'

let patternUrl = /src=["|'](.*?)["|']/;

console.log(patternUrl.exec(imgUrl));

/** Caso 2 */
let htmlLayout = 
    `<html>
        <body>
            <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
            <h1>ejemplo</h1>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
        </body>
    </html>`;

let patternHTML = /<img.*?src=["|'](.*?)["|']/gim;
// let patternHTML2 = /(https?.{1,}\..[a-z]{1,4})/gim;

console.log(patternHTML.test(htmlLayout));
console.log(htmlLayout.match(patternHTML));
// console.log(htmlLayout.exec(patternHTML2));

// Validar sintaxis tarjeta de crédito
/** Caso 1 y 2 */
let mastercardValues = ["5299 64000 000 000", "5299-64000-000-000", "529964000000000"];

let patternCreditCard = /^(5[0-5]{1}\d{2})(\s|-)?(\d{5})(\s|-)?(\d{3})(\s|-)?(\d{3})(\s|-)?|\d{14}$/;

mastercardValues.forEach(value => {
    console.log(`Regex match with ${value}? ->`, patternCreditCard.test(value));
    console.log(patternCreditCard.exec(value));
})


// // Buscar Expresiones regulares

// /** 1 y 2 */
let password = ["La;:%Y4MpxGW", "A7FqmYpQemXR"];

let complexPassPattern = /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
let mediumPassPattern = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;

password.forEach(value => {
    console.log(`Regex match with ${value}? ->`, complexPassPattern.test(value));
    console.log(`Regex match with ${value}? ->`, mediumPassPattern.test(value))
})

// /** 3 */
let urls = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net", "www.lemoncode"];

let urlsPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

urls.forEach(value => {
    console.log(`Regex match with ${value}? ->`, urlsPattern.test(value));
})

// /** 4 */
let hexColors = ["#C7FFE0", "#fff66c", "#CBA9E55"];

let hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;

hexColors.forEach(value => {
    console.log(`Regex match with ${value}? ->`, hexPattern.test(value));
})