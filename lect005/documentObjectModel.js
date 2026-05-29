document.title = "JavaScript DOM";
document.body.style.backgroundColor = "lightgreen";
console.log(document.title);
console.log(document.body);

console.log(document.body.childNodes);
console.log(document.body.childNodes[3]);
console.log(document.body.childNodes[3].childNodes);
console.log(document.body.childNodes[3].firstChild);
console.log(document.body.childNodes[3].lastChild);

let cont = document.body.childNodes[3];
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);
cont.firstElementChild.style.backgroundColor = "pink";

console.log(cont.parentElement);
console.log(document.body.childNodes[3].children);
console.log(document.body.childNodes[3].children[2]);
console.log(document.body.childNodes[3].children[2].previousElementSibling);
console.log(document.body.childNodes[3].children[2].previousSibling);
console.log(document.body.childNodes[3].children[2].nextElementSibling);

console.log(document.body.children[2]);
console.log(document.body.children[2].rows);
console.log(document.body.children[2].rows[1].cells);
console.log(document.body.children[2].rows[1].cells[0]);

let boxesClass = document.getElementsByClassName("box");
console.log(boxesClass);
boxesClass[2].style.backgroundColor = "hotpink";
document.getElementById("red").style.backgroundColor = "red";
console.log(document.querySelectorAll(".query"));
document.querySelectorAll(".query").forEach( (e) => {
    e.style.backgroundColor = "turquoise";
})
document.querySelector(".query").style.backgroundColor = "teal";

let divTag = document.getElementsByTagName("div")
console.log(divTag);
console.log(divTag[4].matches("#red"));
console.log(divTag[4].closest(".container"));
console.log(document.querySelector(".container").contains(divTag[3]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));
console.log(document.querySelector(".container").contains(document.querySelector(".container")));