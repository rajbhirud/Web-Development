let str = "Raj Bhirud";

console.log(str.length);
console.log(str[2]);
console.log(`My name is ${str}`);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(4));
console.log(str.slice(2, 7));

let newstr = str.replace(" ", "-");
console.log(newstr);
console.log(str.concat(" is me!"));

// strings are immutable
console.log(str);

console.log(str.indexOf("hi"));
console.log(str.charAt(1));