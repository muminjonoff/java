var body = document.querySelector("body")
var div = document.getElementById("box_d")
var cilck = document.getElementById("btn")
var colors = [
    "green",
    "black",
    "pink",
    "red",
    "green",
    "aqua",
    "fuchsia",
    "coral",
    "blue",
    "gold",
    ]
cilck.onclick = function(){

div.style.backgroundColor = colors[Math.floor(Math.random () * colors.length)]
//    div.style.backgroundColor = "red"
}