let input;
let turn;
let header= document.createElement('h1');

document.addEventListener("DOMContentLoaded", function (event) {
    inputLoop();
});

function inputLoop() {
    do {
        input = prompt("Choose either x or o to start: ");
        console.log(input);
        if (input === "x") { turn = 1; } else if (input === "o") { turn = 0; }
    } while (input != "x" && input != "o");
}

function handleGridClick(event) {
    let item = event.target;
    if (item != document.getElementsByClassName("grid-container")[0]) {
        if (item.textContent != "x" && item.textContent != "o") {
            if ((turn % 2) == 1) { item.textContent = "x"; }
            else { item.textContent = "o"; }
            turn += 1;
            checkWinCondition();
        }
    }
}

function checkWinCondition(){
    checkDiagonals();
    checkRows();
    checkColumn();
}

function checkDiagonals(){
    checkLine("0","4","8");
    checkLine("2","4","6");
}

function checkRows() {
    checkLine("0","1","2");
    checkLine("3","4","5");
    checkLine("6","7","8");
}

function checkColumn() {
    checkLine("0","3","6");
    checkLine("1","4","7");
    checkLine("2","5","8");
}

function checkLine(x,y,z) {
    if (document.getElementById(x).textContent === document.getElementById(y).textContent && document.getElementById(y).textContent === document.getElementById(z).textContent){ checkWhoWins(x); }
}

function checkWhoWins(x){
    if ( document.getElementById(x).textContent === "x"){ declareWinner("X"); } 
    else if( document.getElementById(x).textContent === "o"){ declareWinner("O"); }
}

function declareWinner(v){
    header.innerText = v + ' has won';
    document.body.appendChild(header);
    resetTheGame()
}

function resetTheGame() {
    for (item of document.getElementsByClassName('grid-item')) {
        item.textContent = '';
    }
    inputLoop();
}