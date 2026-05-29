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

console.log(document.querySelector(".quadrilateral").innerHTML);
console.log(document.querySelector(".quadrilateral").outerHTML);
console.log(document.querySelector(".quadrilateral").innerText);
console.log(document.querySelector(".quadrilateral").tagName);
console.log(document.querySelector(".quadrilateral").nodeName);
console.log(document.querySelector(".square").innerHTML);
console.log(document.querySelector(".square").outerHTML);
console.log(document.querySelector(".square").innerText);
document.querySelector(".square").innerText = "This is a quadrilateral";
// document.querySelector(".square").hidden = true;

console.log(document.querySelector(".square").hasAttribute("style"));
document.querySelector(".square").setAttribute("style", "font-size: 20px");
console.log(document.querySelector(".square").getAttribute("style"));
console.log(document.querySelector(".square").attributes);
// document.querySelector(".square").removeAttribute("style");

let div = document.createElement("div");
div.innerHTML = "New box";
div.setAttribute("class", "box");
document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").replaceWith(div);

let con = document.querySelector(".container");
con.insertAdjacentHTML("beforebegin", "hello");
// con.insertAdjacentHTML("afterbegin", "hello");
// con.insertAdjacentHTML("beforeend", "hello");
// con.insertAdjacentHTML("afterend", "hello");

console.log(document.querySelector(".container").classList);
document.querySelector(".container").classList.add("blue");
document.querySelector(".container").classList.remove("red");
document.querySelector(".container").classList.toggle("green");
console.log(document.querySelector(".container").className);
document.querySelector(".container").classList.toggle("green");
console.log(document.querySelector(".container").className);