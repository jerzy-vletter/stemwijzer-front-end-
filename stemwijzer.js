// JavaScript source code
var counter = 2;

function start() {
    var content_container = document.getElementById("content_container");
    var button_container = document.getElementById("button_container");

    var h1 = document.createElement("h1");
    var p = document.createElement("p");
    var but1 = document.createElement("button");
    var but2 = document.createElement("button");
    var but3 = document.createElement("button");

    h1.innerHTML = subjects[counter].title;
    p.innerHTML = subjects[counter].statement;
    but1.innerHTML = "eens";
    but2.innerHTML = "geen mening";
    but3.innerHTML = "oneens";
    
    but1.setAttribute("class", "btn-answer");
    but2.setAttribute("class", "btn-answer");
    but3.setAttribute("class", "btn-answer");

    content_container.appendChild(h1);
    content_container.appendChild(p);
    button_container.appendChild(but1);
    button_container.appendChild(but2);
    button_container.appendChild(but3);

}

start();