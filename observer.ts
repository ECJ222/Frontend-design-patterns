// One to many relationship.
// Communication between multiple components from a central point.
// Central point is the Modal and when it receives data it distributes it to the children.
// Similar to the MVC pattern.

class CatergoryDropDown {
  categories: string[];
  subscriber: Array<(data: string) => void>;

  constructor() {
    this.categories = ['Electronics', 'Clothing', 'Food', 'Books'];
    this.subscriber = [];
  }

  subscribe(Observer) {
    this.subscriber.push(Observer);
  }

  onChange(selectedCategory) {
    this.subscriber.forEach((observer) => observer(selectedCategory));
  }
}

class FilterDropDown {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  update(category) {
    fetch('https://example.com')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
}

const categoryDropDown = new CatergoryDropDown();

const filter = new FilterDropDown('Electronics');

categoryDropDown.subscribe(filter);
