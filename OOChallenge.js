//Part One
class myCar {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep!";
    }
    toString() {
        return `The car is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

//Part Two
class carStructure extends myCar {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

//Part Three
class myMotorcycle extends myCar {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    engineRev() {
        return "VOOM!!!!"
    }
}

//Part Four
class myMotorcycle extends myCar {
    constructor(capacity) {
        this.cars = [];
        this.capacity = capacity;
    }

    add(newCar){
    if(!(newCar instanceof myCar)) {
        return "Only cars are allowed in here!";
    }
    if (this.cars.length >= this.capacity) {
        return "Sorry, we're full.";
    }
    this.cars.push(newCar);
    return "Car added!";
}
}