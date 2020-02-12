// JavaScript source code
var counter = 2;

function start() {
    var container = document.getElementById("content-container");

    var h1 = document.createElement("h1");
    h1.innerHTML = subjects[counter].title;

    var p = document.createElement("p");
    p.innerHTML = subjects[counter].statement;

    container.appendChild(h1);
    container.appendChild(p);
   
    
}

start();