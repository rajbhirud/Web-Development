let a = prompt("Enter first number");
let b = prompt("Enter second number");
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not allowed!");
}
let sum = parseInt(a) + parseInt(b);
try {
    console.log("The sum of the two is: ", sum*x);
} catch (e) {
    console.log("Some error occured");
    console.error(e);
}
finally{
    console.log("The code ends here!");
}