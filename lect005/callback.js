console.log("Asynchronous nature of JavaScript.");
setTimeout(() => {
    console.log("This is setTimeout function");
}, 2000);
console.log("script ends here!");

const fn = (txt) => {
    console.log(`${txt}!`);
}

const callback = (arg, txt) => {
    console.log(arg);
    fn(txt);
};
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Raj", "overandout");
    document.head.append(sc);
};
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

console.log("Promises in JavaScript");
let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("REJECTEDby prom1! better luck next time.")
    } else {
        setTimeout(() => {
            console.log("prom1 done here");
            resolve("prom1 resolved!");
        }, 3000);
    }
});
// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("REJECTED by prom2! better luck next time.")
    } else {
        setTimeout(() => {
            console.log("prom2 done here");
            resolve("prom2 resolved!");
        }, 2000);
    }
});

let prom3 = Promise.all([prom1, prom2]);
prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});

let prom4 = Promise.allSettled([prom1, prom2]);
prom4.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});

let prom5 = Promise.race([prom1, prom2]);
prom5.then((a) => {
    console.log("prom5: " + a);
}).catch((err) => {
    console.log("prom5: " + err);
});

let prom6 = Promise.any([prom1, prom2]);
prom6.then((a) => {
    console.log("prom6: " + a);
}).catch((err) => {
    console.log("prom6: " + err);
});