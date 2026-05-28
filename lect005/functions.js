function greet (name) {
    console.log("Good Afternoon " + name);
}
greet("Raj");
greet("Jaadu");

function sum (a, b, c=5) {
    console.log(a, b, c);
    return a+b+c;
}
console.log(sum(4, 6));
console.log(sum(5));

const func1 = (x)=>{
    console.log(x);
}
func1(334);