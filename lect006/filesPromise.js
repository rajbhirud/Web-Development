// "type": "module" for this to run
import fs from "fs/promises"

let file = await fs.readFile("welcome.txt");
console.log(file.toString());

// let b = fs.writeFile("welcome.txt", "\n\nThis is written from the filesPromise.js script!")
let b = fs.appendFile("welcome.txt", "\n\nThis is written from the filesPromise.js script!")