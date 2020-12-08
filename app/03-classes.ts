// class Person {
//     firstName: string;
//     lastName: string;
// }

// let phil: Person = new Person();

// phil.firstName = "Phil";
// phil.lastName = "Donahue";

//@ INSTANTIATION
// Creating a new instance of a class. 

    //1                 //2  //3      //4
// let someVariableName: Person = new Person();

// 1. We declare a variable with our own custom name.
// 2. We declare the type. It's a custom type of Person.
// 3. We use the new keyword to instantiate a new instance.
// 4. We call the class with parens. The parens invoke the constructor function.

class Person {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello,", this.firstName);
    }

    sayHelloToFullname(){
        console.log("Hello,", this.firstName + " " + this.lastName)
    }
}

let kenn: Person = new Person ();
kenn.firstName = "Kenn";
kenn.sayHello();

let chris: Person = new Person ();
chris.firstName = "Sheriff";
chris.lastName = "Holler";
chris.sayHelloToFullname();

/* Constructors */
//@ Allow us to more easily and efficiently createa an instance of a class by enabling us to instantiate the class(creat a new instance of the class) and set the properties at the same time.

class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');

//@ Without Constructor
class GameWithoutConstructor {
    gameName: string;
    gameMaker: string;
}

let monopoly: GameWithoutConstructor = new GameWithoutConstructor();

monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';

//@ Inheritance
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

//@ EXAMPLE 1
class Automobile extends Vehicle { //# Extends keyword states that this new class will inherit all properties and methods from another class. This is a subclass of Vehicle
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

//@ EXAMPLE 2
class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

// class Animal {
//     type: string;
//     weight: number;
//     goodHunter: boolean;
// }

// class Bear extends Animal {
//     doesHibernate: boolean;
// }

// let myAnimal: Bear = new Bear();
// myAnimal.goodHunter = true;
// myAnimal.goodHunter = true;

// class Tiger extends Animal {
//     runFast: boolean;
// }

// let myAnimal2: Tiger = new Tiger();
// myAnimal2.weight = 300;
// myAnimal2.runFast = true;

//@Parameter Properties
// Allow us to make our classes even more streamline by allowing us to declare property types and accessors in our constructor parameters
// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }

// let ikea: Store = new Store('Ikea', 'Fishers');

//# Streamlined example from above
class Store {
                //1                                     //2
    constructor(public name: string, public city: string) {}
}

let ikea: Store = new Store('Ikea', 'Fishers');

// 1. We add a public accessor. We'll talk about this in the next module. For now, know that it's required for this approach.
// 2. With this approach we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name;

class Employee extends Person {
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }

}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);