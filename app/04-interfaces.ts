interface Animal {
    name: string;
    numberOfLegs: number;
}

let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
}

//@ cannot instantiate interfaces
//@ Used to shape objects not create them

//1
// function sayHello(name: string) : string {
//     //2
//     var someNum = 1 + 2;
//     var someOtherNum = 1 + 2;
//     return name;
// }

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    //2
    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on ", d);
    }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));