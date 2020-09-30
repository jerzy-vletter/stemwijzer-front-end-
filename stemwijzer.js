// JavaScript source code
var counter = 0;
var awnsers = []; //this is the awnser array, console.log this awnsers to check if the awnsers are in there

//getting all the containers into javascript
var startbutton_container = document.getElementById("startbutton_container")
var question_container = document.getElementById("question_container");
var content_container = document.getElementById("content_container");
var button_container = document.getElementById("button_container");

//makes the start page appear
function toggleStart() {

    question_container.style.display = "none";
    start_container.style.display = "block";
    start();
}

//makes the question container appear
function toggleQuestion() {

    question_container.style.display = "block";
    start_container.style.display = "none";
}


//here is where the startpage code begins
function start() {

    var startbut = document.createElement("button");
    startbut.innerHTML = "start";
    startbut.setAttribute("id", "startbut");
    startbutton_container.appendChild(startbut);
    startbut.addEventListener("click", function () {
        toggleQuestion();
    });

}


//here the question part of the stemwijzer begins
function question() {

    h1 = document.createElement("h1");
    p = document.createElement("p");
    var but1 = document.createElement("button");
    var but2 = document.createElement("button");
    var but3 = document.createElement("button");
    var but4 = document.createElement("button");
    var but5 = document.createElement("button");


    h1.innerHTML = subjects[counter].title;
    p.innerHTML = subjects[counter].statement;
    but1.innerHTML = "eens";
    but2.innerHTML = "geen mening";
    but3.innerHTML = "oneens";
    but4.innerHTML = "<-";
    but5.innerHTML = "skip";

    but1.setAttribute("id", "but1");
    but2.setAttribute("id", "but2");
    but3.setAttribute("id", "but3");
    but4.setAttribute("id", "but4");
    but5.setAttribute("id", "but5");

    content_container.appendChild(h1);
    content_container.appendChild(p);
    button_container.appendChild(but1);
    button_container.appendChild(but2);
    button_container.appendChild(but3);
    button_container.appendChild(but4);
    button_container.appendChild(but5);

        
    but1.addEventListener("click", function () {
        awnsers.push("pro");
        rendercheck();
    });

    but2.addEventListener("click", function () {
        awnsers.push("none");
        rendercheck();
    });

    but3.addEventListener("click", function () {
        awnsers.push("contra");
        rendercheck();
    });

    but4.addEventListener("click", function () {
        awnsers.pop();
        if (counter == 0) { return; }
        counter--;
        render();
    });

    but5.addEventListener("click", function () {
        awnsers.push("skipped");
        rendercheck();
    });
}
question();

function end() {
    //assignes a 0 score to all parties to prevent the score from becoming null (work in progress: if active it gives a NaN output.)
    /*for (c = 0; c <= parties.length - 1; c++) {
        console.log(parties[c]);
        parties[c].score = 0;
    }*/

    console.log("start_end_function")


    parties.forEach(party => {
       
        party.score = 0;
        console.log(party);
    });
    console.log(parties);


    // loops through the parties in subjects
    // then takes the name and looks for it in the parties array
    for (let i = 0; i < subjects.length; i++) {
         // check for the part name then it looks for the name in the party array and if the name is found it ads a point to that party
        for (let p = 0; p < subjects[i].parties.length - 1; p++) {
            var party = parties.find(a => a.name == subjects[i].parties[p].name);
            if (subjects[i].parties[p].position == awnsers[i]) {
                party.score = party.score + 1;
            }
        }
    }


}


function rendercheck() {
    //end is subjects.length-1
    if (counter == subjects.length-1) {
        question_container.style.display = "none";
        end_container.style.display = "block"
        end();
        return;
    }
    counter++;
    render();
}

function render() {
    h1.innerHTML = subjects[counter].title;
    p.innerHTML = subjects[counter].statement;
}