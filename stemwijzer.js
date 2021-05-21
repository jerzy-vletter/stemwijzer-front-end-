// JavaScript source code
var counter = 0;
var answer = []; //this is the answer array, console.log this answers to check if the answer are in there
var buffer = 0;

//getting all the containers into javascript
function getContainer() {
    var startbutton_container = document.getElementById("startbutton_container")
    var question_container = document.getElementById("question_container");
    var content_container = document.getElementById("content_container");
    var button_container = document.getElementById("button_container");
    var end_container = document.getElementById("end_container");
    var text_container = document.getElementById("text_container");
    var endbutton_container = document.getElementById("endbutton_container");
    var vote_weighting_container = document.getElementById("vote_weighting_container");
};
//makes the start page appear
function RenderStartPage() {

    question_container.style.display = "none";
    start_container.style.display = "block";
    startPage();
}

//makes the question container appear
function renderQuestionPage() {

    question_container.style.display = "block";
    start_container.style.display = "none";
}

//here is where the startpage code begins
function startPage() {
    getContainer();

    createStartButton();

}

function createStartButton() {
    var startbut = document.createElement("button");
    startbut.innerHTML = "start";
    startbut.setAttribute("id", "startbut");
    startbutton_container.appendChild(startbut);
    startbut.addEventListener("click", function () {
        renderQuestionPage();
    });
}

//here the question part of the stemwijzer begins
function questionPage() {
    var question_container = document.getElementById("question_container");
    var content_container = document.getElementById("content_container");
    var button_container = document.getElementById("button_container");

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
        answer.push("pro");
        renderWeight();
    });

    but2.addEventListener("click", function () {
        answer.push("none");
        renderWeight();
    });

    but3.addEventListener("click", function () {
        answer.push("contra");
        renderWeight();
    });

    but4.addEventListener("click", function () {
        answer.pop();
        if (counter == 0) { return; }
        counter--;
        renderText();
    });

    but5.addEventListener("click", function () {
        answer.push("skipped");
        renderWeight();
    });

   
}
questionPage();

function ResultPage() {
    getContainer();

    resetResults();

    scoreCalculation();
    
    //put this in because i became bored with typing it in the console
    console.log(parties);

    //clears the endbutton container so no dublicate buttons get created when going back to the questions.
    endbutton_container.innerHTML = "";

    createReturnButton();

    getResults();
}

function resetResults() {
    //assignes a 0 score to all parties to prevent the score from becoming null (work in progress: if active it gives a NaN output.)
    parties.forEach(party => {
        party.score = 0;
    });
}

function getResults() {
    parties.sort(function (a, b) {
        return b.score - a.score;
    });

    //pulls parties and the score and shows them onto the end page
    for (z = 0; z < parties.length - 1; z++) {
        var p = document.createElement("p");
        var s = document.createElement("p");

        p.innerHTML = parties[z].name;
        s.innerHTML = parties[z].score;

        p.setAttribute("class", "parties");
        s.setAttribute("class", "score");

        text_container.appendChild(p);
        text_container.appendChild(s);

        
    }
}

function createReturnButton() {
    //return to questions button on the end page
    var returnButton = document.getElementById("returnButton");

    returnButton.display = "block";
}

function scoreCalculation() {
    // loops through the parties in subjects
    // then takes the name and looks for it in the parties array
    for (let i = 0; i < subjects.length; i++) {
        // looks for the name in the party array and if the name is found it ads a point to that party
        // the (if) is a filter for the answer
        for (let p = 0; p < subjects[i].parties.length - 1; p++) {
            var party = parties.find(a => a.name == subjects[i].parties[p].name);
            if (subjects[i].parties[p].position == answer[i]) {
                party.score = party.score + 1;
            }
        }
    }
}

function returnToQuestions() {
    getContainer();

    question_container.style.display = "block";
    vote_weighting_container.style.display = "none";
    

    //deletes the last answer in the answer array so you don't get extra answer
    answer.pop();

    text_container.innerHTML = "";
}

function voteWeightingPage() {
    getContainer();
  
    createCheckBoxes();
    createReturnButton();
    createConfirmButton()

}

function renderWeight() {
    //end is subjects.length-1
    if (counter == subjects.length - 1) {
        question_container.style.display = "none";
        vote_weighting_container.style.display = "block";
        voteWeightingPage();
        return;
    }
    counter++;
    renderText();
}

function renderResults() {
    vote_weighting_container.style.display = "none";
    end_container.style.display = "block";
    ResultPage();
}

function renderText() {
    h1.innerHTML = subjects[counter].title;
    p.innerHTML = subjects[counter].statement;
}

function createCheckBoxes() {
    if (buffer == 0) {
        for (let m = 0; m <= 29; m++) {
            var createCheckBox = document.createElement("INPUT");
            createCheckBox.setAttribute("type", "checkbox");
            createCheckBox.setAttribute("id", "cb" + m);
            createCheckBox.setAttribute("class", "cbs");
            //createCheckBox.setAttribute("label", subjects[m].title);

            var chbText = document.createElement("p")
            chbText.innerHTML = subjects[m].title;
            

           

            checkBox_container.appendChild(createCheckBox);
            checkBox_container.appendChild(chbText);
            buffer = 1;
        }
    }
    else {
        return;
    }

    
}

function createConfirmButton() {
    var ConfirmButton = document.getElementById("confirmButton");

    ConfirmButton.display = "block";

}


