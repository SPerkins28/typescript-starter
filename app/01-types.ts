let username: string = "instructor";
let password: string = "Letmein1234";
let instructorId: number = 5;

let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let greeting = "Hello";

/* NUMBER */
let age: number = 40;
let currentYear: number = 2020;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

/* STRING */
let companyName: string;
companyName = "Eleven Fifty"

let appName: string = 'Twitter';
appName = "Instagram"; //@ like in javascript, single or double quotes are fine just stay consistent

/* BOOLEAN */
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

/* ARRAY */
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
let allScores: Array<number> = [100, 92, 95, 96];

console.log("Student List:", studentList[0]); //@ accessing the array works the same way

let dataFromThirdParty: any = "12345"; //@ the type of a variable can change when declaring type any
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

/* VOID */
/* Void type has no type at all. Not really seen in variables but more common in functions that return no value */
function sayHelloToAll() : void {
    console.log("Hello to all!")
}

/* NULL & UNDEFINED */
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

/* TUPLE */
/* Allow you to create an array with multiple different types. You should have a fixed number of items in the array, but the items need to be different types. You may want this for a key value pair. */
//@ Declare a tuple type
let usernameAndId: [number, string];
//@ Initialize it
usernameAndId = [1, "kennisreally40"]; //@ these have to be entered in the order you listed when declaring the variable. If it was ["kennisreally40", 1], this would throw an error.

/* ENUM */
/* Allows us to give names numeric values */
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword
/* Like arrays, enumbs start at 0, but that starting index can be assigned a different number */
enum CardType { Ace= 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType);

/* UNION TYPES */
//@ Allow us to have more flexibility with our variables, but we still keep the inent of declaring a specific type for our variables.
let x: number | string;
let y: number | null;
//@ now variables can take more than one type | any other types other than a number or a string would throw an error
x = '1234';
x = 1234;

