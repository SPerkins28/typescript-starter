var username = "instructor";
var password = "Letmein1234";
var instructorId = 5;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
/* NUMBER */
var age = 40;
var currentYear = 2020;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
/* STRING */
var companyName;
companyName = "Eleven Fifty";
var appName = 'Twitter';
appName = "Instagram"; //@ like in javascript, single or double quotes are fine just stay consistent
/* BOOLEAN */
var isLoggedIn = true;
var isGoldLevelUser = true;
/* ARRAY */
var studentList = ['Tom', 'Tracy', 'Nikaya'];
var allScores = [100, 92, 95, 96];
console.log("Student List:", studentList[0]); //@ accessing the array works the same way
var dataFromThirdParty = "12345"; //@ the type of a variable can change when declaring type any
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
/* VOID */
/* Void type has no type at all. Not really seen in variables but more common in functions that return no value */
function sayHelloToAll() {
    console.log("Hello to all!");
}
/* NULL & UNDEFINED */
var undefinedVariable = undefined;
var nullVariable = null;
/* TUPLE */
/* Allow you to create an array with multiple different types. You should have a fixed number of items in the array, but the items need to be different types. You may want this for a key value pair. */
//@ Declare a tuple type
var usernameAndId;
//@ Initialize it
usernameAndId = [1, "kennisreally40"]; //@ these have to be entered in the order you listed when declaring the variable. If it was ["kennisreally40", 1], this would throw an error.
/* ENUM */
/* Allows us to give names numeric values */
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
/* Like arrays, enumbs start at 0, but that starting index can be assigned a different number */
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
/* UNION TYPES */
//@ Allow us to have more flexibility with our variables, but we still keep the inent of declaring a specific type for our variables.
var x;
var y;
//@ now variables can take more than one type | any other types other than a number or a string would throw an error
x = '1234';
x = 1234;
//# sourceMappingURL=01-types.js.map