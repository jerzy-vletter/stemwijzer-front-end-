// JavaScript source code
var counter = 0;
var awnsers = [];

//renders the buttons and text in the stemwijzer
function main() {
    question_container = document.getElementById("question_container");
    var content_container = document.getElementById("content_container");
    var button_container = document.getElementById("button_container");
    

    h1 = document.createElement("h1");
    p = document.createElement("p");
    var but1 = document.createElement("button");
    var but2 = document.createElement("button");
    var but3 = document.createElement("button");
    var but4 = document.createElement("button");

    h1.innerHTML = subjects[counter].title;
    p.innerHTML = subjects[counter].statement;
    but1.innerHTML = "eens";
    but2.innerHTML = "geen mening";
    but3.innerHTML = "oneens";
    but4.innerHTML = "<-"

    but1.setAttribute("id", "but1");
    but2.setAttribute("id", "but2");
    but3.setAttribute("id", "but3");
    but3.setAttribute("id", "but4");

    content_container.appendChild(h1);
    content_container.appendChild(p);
    button_container.appendChild(but1);
    button_container.appendChild(but2);
    button_container.appendChild(but3);
    button_container.appendChild(but4);
        
    but1.addEventListener("click", function () {
        rendercheck();
    });

    but2.addEventListener("click", function () {
        rendercheck();
    });

    but3.addEventListener("click", function () {
        rendercheck();
    });

    but4.addEventListener("click", function () {
        if (counter == 0) { return; }
        counter--;
        render();
    });
}
main();



function rendercheck() {
    //end is subjects.length-1
    if (counter == 3) {
        question_container.style.display = "none";
        return;
    }
    counter++;
    render();
}

function render() {
    h1.innerHTML = subjects[counter].title;
    p.innerHTML = subjects[counter].statement;
}