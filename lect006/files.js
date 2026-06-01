// "type": "commonjs" for this to run
const { fdatasync } = require("fs");
let fs = require("fs")

console.log("Starting");
// fs.writeFileSync("welcome.txt", "Welcome to the tutorial of file handling in JavaScript")
fs.writeFile("welcome.txt", "Welcome to the tutorial of file handling in JavaScript", () => {
    console.log("Done!");
    fs.readFile("welcome.txt", (error, data) => {
        console.log(error, data);
        console.log(data.toString());
    })
})
fs.appendFile("welcome.txt", "\nWELCOME", (e, d) =>{
    console.log(d);
})

console.log("Finsihed")