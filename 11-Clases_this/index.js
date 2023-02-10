

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
    constructor(reservas) {
        this._reservas = reservas; //privada
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

   

    getSubtotal() {
         this._subtotal = reservas.reduce(
            (sum, { tipoHabitacion, pax, noches }) => sum + noches * (this.getRoomType(tipoHabitacion) + this.extraPerson(pax) * pax), 0
        );
    }

    getTotal() {
        const IVA = 1.21;
         this._total = this._subtotal * IVA;
        
    }

   print(){

console.log("Subtotal particular: ", this._subtotal + "€");
console.log("Total particular con IVA: ", this._total + "€");

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
        return 100;
    }

    getSubtotal() { //que devuelva el 85 del subtotal, el descuento se aplica en subtotal
        super.getSubtotal();
        this._subtotal = this._subtotal * 0.85;
    }

}


console.log("***** Caso 1 *****");
const privateClient = new PrivateClient();
privateClient.getSubtotal();
privateClient.getTotal();
privateClient.print();


console.log("***** Caso 2 *****");
const tourOperator = new TourOperator();
tourOperator.getSubtotal();
tourOperator.getTotal();
tourOperator.print();
