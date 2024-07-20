var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, seats) {
        var _this = _super.call(this, brand) || this;
        _this.seats = seats;
        return _this;
    }
    Car.prototype.getType = function () {
        return "car";
    };
    Car.prototype.performAction = function () {
        return "Car ".concat(this.brand, " with ").concat(this.seats, " seats is starting its engine.");
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, capacity) {
        var _this = _super.call(this, brand) || this;
        _this.capacity = capacity;
        return _this;
    }
    Truck.prototype.getType = function () {
        return "truck";
    };
    Truck.prototype.getAction = function () {
        return "Truck ".concat(this.brand, " with capacity ").concat(this.capacity, " kg is loading cargo.");
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(brand, hasSidecar) {
        var _this = _super.call(this, brand) || this;
        _this.hasSidecar = hasSidecar;
        return _this;
    }
    Motorcycle.prototype.getType = function () {
        return "motorcycle";
    };
    Motorcycle.prototype.action = function () {
        var sidecarStatus = this.hasSidecar ? "with" : "without";
        return "Motorcycle ".concat(this.brand, " ").concat(sidecarStatus, " sidecar is revving its engine.");
    };
    return Motorcycle;
}(Vehicle));
var VehicleValidator = /** @class */ (function () {
    function VehicleValidator() {
    }
    VehicleValidator.isCar = function (vehicle) {
        return vehicle instanceof Car;
    };
    VehicleValidator.isTruck = function (vehicle) {
        return vehicle instanceof Truck;
    };
    VehicleValidator.isMotorcycle = function (vehicle) {
        return vehicle instanceof Motorcycle;
    };
    return VehicleValidator;
}());
var VehicleList = /** @class */ (function () {
    function VehicleList() {
        this.vehicles = [];
    }
    VehicleList.prototype.addVehicle = function (vehicle) {
        var _a;
        if (Array.isArray(vehicle)) {
            (_a = this.vehicles).push.apply(_a, vehicle);
        }
        else {
            this.vehicles.push(vehicle);
        }
        // this.saveToLocalStorage();
    };
    VehicleList.prototype.performVehicleActions = function (number) {
        var selectedVehicle = this.vehicles[number];
        if (VehicleValidator.isCar(selectedVehicle)) {
            return selectedVehicle.performAction();
        }
        else if (VehicleValidator.isTruck(selectedVehicle)) {
            return selectedVehicle.getAction();
        }
        else if (VehicleValidator.isMotorcycle(selectedVehicle)) {
            return selectedVehicle.action();
        }
        else {
            throw new Error("Unhandled vehicle type: ".concat(selectedVehicle));
        }
    };
    VehicleList.prototype.saveToLocalStorage = function () {
        var vehiclesJSON = this.vehicles.map(function (vehicle) { return (__assign({ type: vehicle.getType() }, vehicle)); });
        localStorage.setItem("vehicles", JSON.stringify(vehiclesJSON));
    };
    VehicleList.prototype.loadFromLocalStorage = function () {
        var vehiclesJSON = JSON.parse(localStorage.getItem("vehicles") || "[]");
        console.log(vehiclesJSON);
        this.vehicles = vehiclesJSON;
    };
    VehicleList.prototype.vehicleFromJSON = function () {
        // ?
    };
    VehicleList.prototype.loadFromStorage = function () {
        this.loadFromLocalStorage();
        return this.vehicles;
    };
    return VehicleList;
}());
var VehicleListObject = new VehicleList();
var myCar = new Car("ferrari", 2);
var myTruck = new Truck("niko trans", 12);
var myMotorcycle = new Motorcycle("fire", true);
var vehicleObjects = [myCar, myTruck, myMotorcycle];
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
