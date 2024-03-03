// Factory Design Pattern -> Client asks you to give him different vehicles in factory

class Vehicle {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(color, model) {
    super(color, model);
  }
}

class Truck extends Vehicle {
  constructor(color, model) {
    super(color, model);
  }
}

class Bike extends Vehicle {
  constructor(color, model) {
    super(color, model);
  }
}

class Factory {
  constructor() {
    this.vehicle = null;
  }
  createVehicle(vehicleType) {
    switch (vehicleType) {
      case "car":
        this.vehicle = new Car("Grey", "Swift");
        break;
      case "truck":
        this.vehicle = new Truck("Purple", "Mahindra");
        break;
      case "bike":
        this.vehicle = new Bike("Black", "Pulsar");
        break;
      default:
        break;
    }
    return this.vehicle;
  }
}

const factory = new Factory();
console.log(factory.createVehicle("car"));
console.log(factory.createVehicle("bike"));
