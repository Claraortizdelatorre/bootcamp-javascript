const reservas = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1
    }
  ];



  class Reserva {
    constructor() {
        this._reservas = []; //privada
        this._subtotal = 0;
        this._total = 0;
    }

    getRoomType(type) {
        switch(type) {
            case "standard":
                return 100;
            case "suite": 
                return 150;
        }
    }

    extraPerson(person) {
        return person > 1 ? 40 * (person - 1) : 0;
    }

    breakfastIncluded(breakfast) {
        return breakfast ? 15 : 0;
    }

    getSubtotal() {
        this._subtotal = reservas.reduce(
            (sum, { tipoHabitacion, pax, noches, desayuno }) => sum + noches * (this.getRoomType(tipoHabitacion) + this.extraPerson(pax) + this.breakfastIncluded(desayuno) * pax), 0
        );
    }

    getTotal() {
        const IVA = 1.21;

        this._total = reservas.reduce(
            (sum, { tipoHabitacion, pax, noches, desayuno }) => sum + noches * (this.getRoomType(tipoHabitacion) + this.extraPerson(pax) + this.breakfastIncluded(desayuno) * pax) * IVA, 0
        );
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    set reservas(nuevaReserva) {
        this._reservas = nuevaReserva;
        this.getSubtotal();
        this.getTotal();
    }
}

class PrivateClient extends Reserva {
    constructor() {
        super();
    }
}

class TourOperator extends Reserva {
    constructor() {
        super();
    }

    getRoomType(type) {
        return type = 100;
    }

    get total() {
        return (this._total * 0.85).toFixed(2);
    }
}

const privateClient = new PrivateClient();
privateClient.reservas = reservas;

console.log("***** Caso 1 *****");
console.log("Subtotal particular: ", privateClient.subtotal + "€");
console.log("Total particular con IVA: ", privateClient.total + "€");

const tourOperator = new TourOperator();
tourOperator.reservas = reservas;

console.log("***** Caso 2 *****");
console.log("Subtotal touroperador: ", tourOperator.subtotal + "€");
console.log("Total touroperador: ", tourOperator.total + "€");
