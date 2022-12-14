//HOTELES
var hoteles = {
    Mencey: {
      name: "Mencey",
      location: "Tenerife",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    },
    Lani: {
      name: "Lani's Suites Deluxe",
      location: "Lanzarote",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
    },
  };

/*
document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =   "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;
*/

//elección hotel
var selectHotel = prompt("Selecciona el hotel al que quiere hacer la reseña: Mencey o Lani");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectHotel].location;
document.getElementById("img-hotel").src = hoteles[selectHotel].img;

//Puntuación del hotel
/*var rating = prompt("Puntuación del 1 al 5:");
document.getElementById("rating").innerHTML = rating + " estrellas";*/

//puntuación con estrellas
var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
document.getElementById("rating").innerHTML = stars[rating];

//usuario anónimo
var anonymous = confirm("¿Quiere que la reseña sea anónima?") //true o false
document.getElementById("anonymous").checked = anonymous;

