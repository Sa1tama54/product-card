class Drink {
  #temperature;

  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = null;
  }

  getInfo() {
    return `${this.name}\nРазмер: ${this.size}\nЦена: ${this.price} \u20BD\nТемпература: ${this.#temperature}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    this.#temperature = value;
  }

  #makeDrink() {
    this.setTemperature(this.constructor.servingTemperature);
  }

  serveDrink() {
    this.#makeDrink();
    console.log(`Вы заказали: ${this.getInfo()}`);
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, flavor, isCarbonated) {
    super(name, size, price);
    this.flavor = flavor;
    this.isCarbonated = isCarbonated;
  }

  static servingTemperature = "4°";

  getInfo() {
    return `${super.getInfo()}\nВкус: ${this.flavor}\nГазированный: ${this.isCarbonated}`;
  }
}

class Tea extends Drink {
  constructor(name, size, price, teaType, additives, packaging) {
    super(name, size, price);
    this.teaType = teaType;
    this.additives = additives;
    this.packaging = packaging;
  }

  static servingTemperature = "70°";

  getInfo() {
    return `${super.getInfo()}\nТип чая: ${this.teaType}\nДобавки: ${this.additives}\nТип подачи: ${this.packaging}`;
  }
}

class Coffee extends Drink {
  constructor(name, size, price, beanType, milkType, syrup) {
    super(name, size, price);
    this.beanType = beanType;
    this.milkType = milkType;
    this.syrup = syrup;
  }

  static servingTemperature = "85°";

  getInfo() {
    return `${super.getInfo()}\nТип кофе: ${this.beanType}\nТип молока: ${this.milkType}\nСироп: ${this.syrup}`;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе ${this.name} в городе ${this.location}`;
  }

  orderDrink(drink) {
    return drink.serveDrink();
  }
}

const strawberryLemonade = new Lemonade(
  "Клубничный лимонад",
  "0,5л",
  350,
  "Клубника и мята",
  true,
);

const carcadeTea = new Tea(
  "Каркаде",
  "маленькая кружка",
  100,
  "Травяной",
  "сахар",
  "в пакетиках",
);

const latte = new Coffee(
  "Латте",
  "Большой стакан",
  400,
  "арабика",
  "миндальное",
  "карамельный",
);

const cafe = new Cafe("Чайхана", "Москва");
console.log(cafe.getInfo());
cafe.orderDrink(strawberryLemonade);
cafe.orderDrink(carcadeTea);
cafe.orderDrink(latte);
