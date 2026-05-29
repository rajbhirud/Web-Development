let fruits = ["apple", "mango", "orange"];
const a1 = [45, "rohit", true];

let a = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(a.length);
console.log(typeof a);

console.log(a.toString());
console.log(a.join("->"));

a.pop();
console.log(a);
a.push(9);
console.log(a);
a.shift();
console.log(a);
a.unshift(21);
console.log(a);
a.sort();           // assumes elements are strings and then sorts
console.log(a);
a.splice(4, 1, 555);
console.log(a);
delete a[2];
console.log(a);
a.reverse();
console.log(a);

a.forEach((value, index) => {
    console.log(index, value);
});

// map filter reduce
let arr = [2, 8, 16, 7, 25];
let newArr = arr.map((e, index, array) => {
    return e**2;
})
console.log(newArr);

const isGreaterThanTen = (e) => {
    return (e>10) ? true : false;
}
console.log(arr.filter(isGreaterThanTen));

const add = (a, b) => {
    return a+b;
}
console.log(arr.reduce(add));

console.log(Array.from("the big game"));