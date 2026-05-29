// async function getData() {
//     // simulate getting data from the server.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(200);
//         }, 3000);
//     });
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    console.log(data);
    return data;
}

async function main() {
    console.log("Loading Modules");
    console.log("Running tasks");
    console.log("Loading Data");
    let data = await getData();
    console.log(data);
    console.log("Processing Data");
    console.log("another task");
}

main();