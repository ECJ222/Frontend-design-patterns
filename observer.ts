// One to many relationship.
// Communication between multiple components from a central point.
// Central point is the Modal and when it receives data it distributes it to the children.
// Similar to the MVC pattern.

import axios from 'axios';

class Filter {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  async update() {
    // dummy endpoint.
    const response = await axios.get(`https://example.com?category=${this.type}`)
    console.log(response) // :)
  }
}

class CatergoryDropDown {
  subscriber: Array<Filter>;

  constructor() {
    this.subscriber = [];
  }

  subscribe(observer: Filter) {
    this.subscriber.push(observer);
  }

  onChange() {
    this.subscriber.forEach((observer) => observer.update());
  }
}

export const getCategories = (type: string) => {
  const categoryDropDown = new CatergoryDropDown();

  const filter = new Filter(type);

  categoryDropDown.subscribe(filter);
  categoryDropDown.onChange();
};
