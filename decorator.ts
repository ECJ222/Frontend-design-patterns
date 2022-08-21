// Base class.

class Pizza {
  name: string;
  type: string;
  price: number;

  constructor() {
    this.name = 'Pizza';
    this.type = 'Regular';
    this.price = 10;
  }
}

// Other class using the base class.
class PepperoniPizza {
  name: string;
  type: string;
  price: number;

  constructor(pizza: Pizza) {
    this.name = 'Pepperoni ' + pizza.name; 
    this.price = pizza.price + 12;
    this.type = 'Deluxe';
  }
}

const regularPizza = new Pizza();
const deluxePepperoniPizza = new PepperoniPizza(regularPizza);

export {
  regularPizza,
  deluxePepperoniPizza
}

// import { regularPizza, deluxePepperoniPizza } from './decorator';
// instead of const { regularPizza, deluxePepperoniPizza } = require('./decorator');)
