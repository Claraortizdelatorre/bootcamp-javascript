// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  // Datos
  var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];    

// Generación aleatoria de disponibilidad
let getRandom = () =>  Math.random() < 0.5;

for (member of myTeam) {
    console.log("Disponibilidad de ", member.name);
    
    for (let i = 0; i < member.availability.length; i ++) {
        member.availability[i] = getRandom();

        if (member.availability[i] === true) {
            console.log(WORK_HOURS[i]," - Sí");
        } else {
            console.log(WORK_HOURS[i]," - No");
        }
    }
}

// Buscar hueco libre
let searchFreeSpot = () => {
    let freeHours = [];

    for (let i = 0; i < myTeam.length; i++) {
        for (let j = 0; j < myTeam[i].availability.length; j++) {
            if (i === 0 && myTeam[i].availability[j]) {
                freeHours.push(j);
            } else if (i !== 0) {
                for (let z = freeHours.length - 1; z >= 0; z--) {
                    if (!myTeam[i].availability[freeHours[z]]) {
                        freeHours.splice(z, 1);
                    }
                }
            }
        }
    }

    return freeHours;
}

let result = searchFreeSpot();

if (result.length > 0) {
    console.log("Hueco encontrado en el horario: ", WORK_HOURS[result[0]]);
} else {
    console.log("Lo siento. No hay hueco disponible.");
}