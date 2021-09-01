// JavaScript source code
var counter = 0;
var answer = []; //this is the answer array, console.log this (answers) to check if the answer are in there
var bufferchb = 0; //this var is used as a control switch for the createCheckBox function. 
var bufferresults = 0; //this var is used as a control switch for the results page. 
const groteZetels = 8; //

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

    counter = 0;
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
    
    var startButton = document.getElementById("startbut");
}

//here the question part of the stemwijzer begins
function questionPage() {
    var question_container = document.getElementById("question_container");
    var content_container = document.getElementById("content_container");
    var button_container = document.getElementById("button_container");

    h1 = document.createElement("h1");
    p = document.createElement("p");
    var agreeButton = document.getElementById("but1");
    var doubtButton = document.getElementById("but2");
    var disagreeButton = document.getElementById("but3");
    var backButton = document.getElementById("but4");
    var skipButton = document.getElementById("but5");
   
    content_container.appendChild(h1);
    content_container.appendChild(p);
    
    renderText();
}
questionPage();

function buttonFunctionality(givenAnswer){

    if (givenAnswer == "return"){
        if (counter == 0){ return; }
        counter--;
        renderText();
        checkAnswer();
    }

    else {
        answer.splice([counter], 1, givenAnswer)
        renderText();
        renderWeight();
        checkAnswer();
    }

}

function checkAnswer() { 

    document.querySelectorAll("#but1, #but2, #but3, #but5").forEach((element) => { element.style.backgroundColor = "black"; });


    switch (answer[counter]) {
        case "pro":
            document.getElementById("but1").style.backgroundColor = "#000080";
            break;

        case "none":
            document.getElementById("but2").style.backgroundColor = "#000080";
            break;

        case "contra":
            document.getElementById("but3").style.backgroundColor = "#000080";
            break;

        case "skipped":
            document.getElementById("but5").style.backgroundColor = "#000080";
            break;

        default:
            document.querySelectorAll("#but1", "#but2", "#but3", "#but5").forEach((element) => { element.style.backgroundColor = "black"; });
            break;
    }
};

function ResultPage() {
    getContainer();

    resetResults();

    scoreCalculation();

    checkboxFunction();

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
    if (bufferresults == 0) {
        for (z = 0; z < parties.length - 1; z++) {
            var p = document.createElement("p");
            var s = document.createElement("p");

            p.innerHTML = parties[z].name;
            s.innerHTML = parties[z].score;

            p.setAttribute("class", "parties");
            s.setAttribute("class", "score");

            text_container.appendChild(p);
            text_container.appendChild(s);

            bufferresults = 1;
        }
    }
    else {
        return;
    }
}

function createReturnButton() {
    //return to questions button on the vote wieghting page
    var returnButton = document.getElementById("returnButton");

    returnButton.display = "block";


    //return to vote weighting page on the results page
    var returnButton2 = document.getElementById("returnButton2");

    returnButton2.display = "block";
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
    //answer.pop();

    text_container.innerHTML = "";
}

function returnToVote() {
    getContainer();

    vote_weighting_container.style.display = "block";
    end_container.style.display = "none";


};

function voteWeightingPage() {
    getContainer();

    createCheckBoxes();
    createReturnButton();
    createConfirmButton();
    editCssVoteWeightingPage();

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

    ResultPage();
    editCssResultsPage();


}

function renderText() {
    h1.innerHTML = subjects[counter].title;
    p.innerHTML = subjects[counter].statement;
}

function partijenSelectie() {
    getContainer();
    createSelectieBoxes();
    

} //work in progress

function createSelectieBoxes() {

    var allePartijenSelectie = document.createElement("input");
    allePartijenSelectie.setAttribute("type", "checkbox");
    allePartijenSelectie.setAttribute("id", "apcb");
    allePartijenSelectie.setAttribute("class", "pcb");

    var gpcbText = document.createElement("p");
    gpcbText.innerHTML = "Selecteer alle partijen."
    gpcbText.setAttribute("id", "apcbText");

    var grotePartijenSelectie = document.createElement("input");
    grotePartijenSelectie.setAttribute("type", "checkbox");
    grotePartijenSelectie.setAttribute("id", "gpcb");
    grotePartijenSelectie.setAttribute("class", "pcb");

    var gpcbText = document.createElement("p");
    gpcbText.innerHTML = "Selecteer alleen de grote partijen."
    gpcbText.setAttribute("id", "gpcbText");

    var kleinePartijenSelectie = document.createElement("input");
    kleinePartijenSelectie.setAttribute("type", "checkbox");
    kleinePartijenSelectie.setAttribute("id", "kpcb");
    kleinePartijenSelectie.setAttribute("class", "pcb");

    var gpcbText = document.createElement("p");
    gpcbText.innerHTML = "Selecteer alleen de seculiere partijen."
    gpcbText.setAttribute("id", "kpcbText");
} // work in progress

function createCheckBoxes() {
    if (bufferchb == 0) {
        for (let m = 0; m < subjects.length; m++) {
            var createCheckBox = document.createElement("INPUT");
            createCheckBox.setAttribute("type", "checkbox");
            createCheckBox.setAttribute("id", "cb" + m);
            createCheckBox.setAttribute("class", "cbs");


            var chbText = document.createElement("p")
            chbText.innerHTML = subjects[m].title;
            chbText.setAttribute("id", "chbT" + m);




            checkBox_container.appendChild(createCheckBox);
            checkBox_container.appendChild(chbText);
            bufferchb = 1;
        }
    }
    else {
        return;
    }


}

function checkboxFunction(party) {

    for (let v = 0; v < subjects.length; v++) {
        if (document.getElementById("cb" + [v]).checked == true) {
            for (let q = 0; q < subjects[v].parties.length - 1; q++) {
                var party = parties.find(a => a.name == subjects[v].parties[q].name);
                if (subjects[v].parties[q].position == answer[v]) {

                    party.score = party.score + 1
                }
            }
        }
    }
}

function createConfirmButton() {
    var ConfirmButton = document.getElementById("confirmButton");

    ConfirmButton.display = "block";

}

function editCssVoteWeightingPage() {
    document.getElementById("chbT0").style.marginTop = "0px"; //this fixes a miss alignment issue when using 2 columns

}

function editCssResultsPage() {
    vote_weighting_container.style.display = "none";
    end_container.style.display = "block";
    endbutton_container.style.display = "block";

};

function confirmEnd() {
    var confirmTxT;
    var confirmResult = confirm("wilt u de stemwijziger eindigen?");

    if (confirmResult == true) {
        confirmTxT = "bedankt voor het deelnemen aan deze stemwijzer, ik hoop dat u er wijzer van bent geworden."
        alert(confirmTxT);
        location.reload();
    }
    else {
        confirmTxT = "neem uw tijd, ik zal op u wachten :)";
        alert(confirmTxT);
    }
};

