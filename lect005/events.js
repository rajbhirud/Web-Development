let button = document.getElementById("btn");
const bgColor = () => {
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
    return `rgb(${r}, ${g}, ${b})`;
}
const changeBGColor = () => {
    document.body.style.backgroundColor = bgColor();
}
button.addEventListener("click", changeBGColor);

document.addEventListener("keydown", (e) => {
    document.querySelector(".box").innerHTML = `You entered: ${e.key}`;
});

// Event bubbling
document.querySelector(".square").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e);
    alert("You clicked Square!");
});
document.querySelector(".rectangle").addEventListener("click", () => {
    alert("You clicked Rectangle!");
});
document.querySelector(".quadrilateral").addEventListener("click", () => {
    alert("You clicked Quadrilateral!");
});

setInterval(() => {
    document.querySelector(".square").style.backgroundColor = bgColor();
},2000);

setTimeout(() => {
    document.querySelector(".quadrilateral").style.backgroundColor = bgColor();
},3000);