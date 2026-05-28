for (let a=1; a<=5; a++) {
    console.log(a)
}

let obj = {
    name: "raj",
    rollno: "214",
    college: "IITB"
}
for (const key in obj) {
    console.log(key + ": " + obj[key])
}

let str = "The Big Game"
for (const c of str) {
    console.log(c)
}

let i=1;
while(i<5){
    console.log(i)
    i++;
}

do{
    console.log("i=" + i)
    i++;
} while (i<5)