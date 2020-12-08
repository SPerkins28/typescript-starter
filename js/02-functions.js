function addNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
//@ 1 - Works
addNumbers(1, 2);
//@ 2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
fullName("Sean", "Perkins");
function sayHello(name) {
    return name;
}
sayHello("Kenn");
// sayHello(1) <--- Does not work as the function is expecting a string and nothing else
function conditional(username, password) {
    if (username === "elevenfiftyuser" && password === "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
}
conditional("elevenfiftuser", "Letmein1234!"); //@ Returns true
//@ OPTIONALS
//@ Allow for flexibility in parameters. We can allow an argument to be left out if needed. Optionals are declared using a ? after them.
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional"); //@Optional params must go after all required params!!!
function wholeName(firstName, lastName, middleName) {
    if (middleName === undefined) {
        return firstName + " " + lastName;
    }
    else {
        return firstName + " " + middleName + " " + lastName;
    }
}
wholeName("Sean", "Perkins", "Gregory");
//# sourceMappingURL=02-functions.js.map