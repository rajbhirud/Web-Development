console.log("Good Afternoon!")

var a = 5;
var b = 2;
var str = "raj";
let c = 7;

console.log(a*b)
console.log(typeof a, typeof b, typeof str)

const a1 = 6;
// a1 = a1+1       //error

{
    var a = 99;
    console.log("a = " + a)
    
    let c=32;
    console.log("c = " + c)
}
console.log("a = " + a)
console.log("c = " + c)

// Primitive data types
let x = "raj";
let y = 7.55;
let z = 45;
let u = true;
let v = null;
let w = undefined;

console.log(x, y, z, u, v, w);
console.log(typeof x, typeof y, typeof z, typeof u, typeof v, typeof w);

// Object
let p ={
    "name": "raj",
    "salary":  75000
}
p.salary = 100000;
console.log(p)