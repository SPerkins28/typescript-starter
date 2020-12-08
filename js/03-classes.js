// class Person {
//     firstName: string;
//     lastName: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello,", this.firstName);
    };
    Person.prototype.sayHelloToFullname = function () {
        console.log("Hello,", this.firstName + " " + this.lastName);
    };
    return Person;
}());
var kenn = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();
var chris = new Person();
chris.firstName = "Sheriff";
chris.lastName = "Holler";
chris.sayHelloToFullname();
/* Constructors */
//@ Allow us to more easily and efficiently createa an instance of a class by enabling us to instantiate the class(creat a new instance of the class) and set the properties at the same time.
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
//@ Without Constructor
var GameWithoutConstructor = /** @class */ (function () {
    function GameWithoutConstructor() {
    }
    return GameWithoutConstructor;
}());
var monopoly = new GameWithoutConstructor();
monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
//@ Inheritance
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//@ EXAMPLE 1
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";
//@ EXAMPLE 2
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
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
var Store = /** @class */ (function () {
    //1                                     //2
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
// 1. We add a public accessor. We'll talk about this in the next module. For now, know that it's required for this approach.
// 2. With this approach we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
//# sourceMappingURL=03-classes.js.map