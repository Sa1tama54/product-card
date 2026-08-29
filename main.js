import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";
import "./homework-11.js";

import "./homework-6.js";

class Device {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  buyDevice() {
    console.log(`${this.brand} ${this.model} is purchased`);
  }
}

class Notebook extends Device {
  constructor(brand, model, gpu) {
    super(brand, model);
    this.gpu = gpu;
  }

  showSpecs() {
    console.log(`Видеокарта: ${this.gpu}`);
  }
}

class Phone extends Device {
  constructor(brand, model, cameraCount) {
    super(brand, model);
    this.cameraCount = cameraCount;
  }

  showSpecs() {
    console.log(`Количество камер: ${this.cameraCount}`);
  }
}

const notebook = new Notebook("Asus", "ROG Strix G16", "RTX 4070");
const phone = new Phone("Apple", "iPhone 17 Pro Max", 3);

notebook.buyDevice();
notebook.showSpecs();
phone.buyDevice();
phone.showSpecs();
