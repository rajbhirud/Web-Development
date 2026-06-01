async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
        }, 2000);
    });
}

// Throws error
// let a = await sleep();
// let b = await sleep();

// IIFE (Immediately Invoked Function Expression)
(async function main() {
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})();