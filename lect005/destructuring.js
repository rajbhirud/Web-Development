let arr = [2, 5, 6, 87, 7, 63, 41];
let [x, y] = arr;
console.log(x, y);

let [p , q , ...rest] = arr;
console.log(x, y, rest);

let obj = {
    name: "Raj",
    age: 21,
    grade: "AB"
}
let {name: a, age: b} = obj;
console.log(a, b);