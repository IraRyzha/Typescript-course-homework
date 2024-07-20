abstract class Vehicle {
  constructor(public brand: string) {}
  abstract getType(): string;
}

class Car extends Vehicle {
  constructor(brand: string, public seats: number) {
    super(brand);
  }

  getType(): string {
    return "car";
  }

  performAction(): string {
    return `Car ${this.brand} with ${this.seats} seats is starting its engine.`;
  }
}

class Truck extends Vehicle {
  constructor(brand: string, public capacity: number) {
    super(brand);
  }

  getType(): string {
    return "truck";
  }

  getAction(): string {
    return `Truck ${this.brand} with capacity ${this.capacity} kg is loading cargo.`;
  }
}

class Motorcycle extends Vehicle {
  constructor(brand: string, public hasSidecar: boolean) {
    super(brand);
  }

  getType(): string {
    return "motorcycle";
  }

  action(): string {
    const sidecarStatus = this.hasSidecar ? "with" : "without";
    return `Motorcycle ${this.brand} ${sidecarStatus} sidecar is revving its engine.`;
  }
}

class VehicleValidator {
  private constructor() {}

  public static isCar(vehicle: Vehicle): vehicle is Car {
    return vehicle instanceof Car;
  }

  public static isTruck(vehicle: Vehicle): vehicle is Truck {
    return vehicle instanceof Truck;
  }

  public static isMotorcycle(vehicle: Vehicle): vehicle is Motorcycle {
    return vehicle instanceof Motorcycle;
  }
}

class VehicleList {
  private vehicles: Vehicle[] = [];

  addVehicle(vehicle: Vehicle | Vehicle[]) {
    if (Array.isArray(vehicle)) {
      this.vehicles.push(...vehicle);
    } else {
      this.vehicles.push(vehicle);
    }
    // this.saveToLocalStorage();
  }

  performVehicleActions(number: number): any {
    const selectedVehicle = this.vehicles[number];

    if (VehicleValidator.isCar(selectedVehicle)) {
      return selectedVehicle.performAction();
    } else if (VehicleValidator.isTruck(selectedVehicle)) {
      return selectedVehicle.getAction();
    } else if (VehicleValidator.isMotorcycle(selectedVehicle)) {
      return selectedVehicle.action();
    } else {
      throw new Error(`Unhandled vehicle type: ${selectedVehicle}`);
    }
  }

  private saveToLocalStorage(): void {
    const vehiclesJSON = this.vehicles.map((vehicle) => ({
      type: vehicle.getType(),
      ...vehicle,
    }));
    localStorage.setItem("vehicles", JSON.stringify(vehiclesJSON));
  }

  private loadFromLocalStorage(): void {
    const vehiclesJSON = JSON.parse(localStorage.getItem("vehicles") || "[]");
    console.log(vehiclesJSON);

    this.vehicles = vehiclesJSON;
  }

  private vehicleFromJSON() /* ? */ {
    // ?
  }

  public loadFromStorage() {
    this.loadFromLocalStorage();
    return this.vehicles;
  }
}

const VehicleListObject = new VehicleList();
const myCar = new Car("ferrari", 2);
const myTruck = new Truck("niko trans", 12);
const myMotorcycle = new Motorcycle("fire", true);

const vehicleObjects = [myCar, myTruck, myMotorcycle];

VehicleListObject.addVehicle(vehicleObjects);

console.log(VehicleListObject.performVehicleActions(0));
console.log(VehicleListObject.performVehicleActions(1));
console.log(VehicleListObject.performVehicleActions(2));

// const carTag: HTMLElement | null = document.querySelector(".CarInfo");
// const truckTag: HTMLElement | null = document.querySelector(".TruckInfo");
// const motorcycleTag: HTMLElement | null =
//   document.querySelector(".MotorcycleInfo");

// if (carTag) {
//   carTag.innerHTML = `<p>${VehicleListObject.performVehicleActions(0)}</p>`;
// }

// if (truckTag) {
//   truckTag.textContent = VehicleListObject.performVehicleActions(1);
// }

// if (motorcycleTag) {
//   motorcycleTag.textContent = VehicleListObject.performVehicleActions(2);
// }
