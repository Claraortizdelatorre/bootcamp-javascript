const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

class Reserva {
  constructor(reservas) {
    this._reservas = reservas; //privada
    this._subtotal = 0;
    this._total = 0;
  }

  getRoomType(type) {
    switch (type) {
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
      (sum, { tipoHabitacion, pax, noches, desayuno }) =>
        sum +
        noches *
          (this.getRoomType(tipoHabitacion) +
            this.extraPerson(pax) +
            this.breakfastIncluded(desayuno) * pax),
      0
    );
  }

  getTotal() {
    const IVA = 1.21;
    this._total = this._subtotal * IVA;
  }

  print() {
    console.log("Subtotal: ", this._subtotal.toFixed(2) + "€");
    console.log("Total con IVA: ", this._total.toFixed(2) + "€");
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
    return (type = 100);
  }

  getSubtotal() {
    super.getSubtotal();
    this._subtotal = this._subtotal * 0.85;
  }
}

console.log("***** Caso 1 *****");
const privateClient = new PrivateClient(reservas);
privateClient.getSubtotal();
privateClient.getTotal();
privateClient.print();

console.log("***** Caso 2 *****");
const tourOperator = new TourOperator(reservas);
tourOperator.getSubtotal();
tourOperator.getTotal();
tourOperator.print();
