let obj = {
    name: "Raj",
    age: 21,
};
console.log(obj);

let animal = {
    eats: true,
    sleeps: true,
};
let cow = {
    givesMilk: true
};
cow.__proto__ = animal;
console.log(cow);
console.log(cow.eats);

class Animal{
    constructor(name) {
        console.log("Creating Animal...");
        this.name = name;
    }
    eats() {
        console.log("Animal is eating");
    }
    sleeps() {
        console.log("Animal is sleeping");
    }
}
let a = new Animal("Bunny");
console.log(a);

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Creating Lion...");
    }
    roars() {
        console.log("Lion is roaring!");
    }
    eats() {
        console.log("Chasing deers...");
        super.eats();
    }
}
let l = new Lion("Sheru");
l.roars();
l.eats();

console.log(a instanceof Animal);
console.log(a instanceof Lion);
console.log(l instanceof Animal);
console.log(l instanceof Lion);