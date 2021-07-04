let input;
let turn;
let header = document.createElement('h1');
let container = document.getElementsByClassName("grid-container")[0];
let items = document.getElementsByClassName("test");
let check = 0;

function iconOnClick(event) {
    console.log(event);
    
    
    for (item of items) {
        item.style.visibility = "hidden";
    }

    if ( event.target.id == "X"){ 
        turn = 1;
    } 

    else if(event.target.id == "O") { 
        turn = 0;
    }
    
    
    container.style.visibility = "visible";
}

function handleGridClick(event) {
    let item = event.target;
    if (item != document.getElementsByClassName("grid-container")[0]) {
        if (item.textContent != "x" && item.textContent != "o") {
            if ((turn % 2) == 1) { item.textContent = "x"; }
            else { item.textContent = "o"; }
            turn += 1;
            check +=1;
            checkWinCondition();
        }
    }
    if (check == 9){
        declareWinner("Draw");
        check =0;
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
    if ( v == "Draw"){
        header.innerText = v;
    } else{
        header.innerText = v + ' has won';
    }
    document.body.appendChild(header);
    container.style.visibility = "hidden";
    resetTheGame()
    
}

function resetTheGame() {
    for (item of document.getElementsByClassName('grid-item')) {
        item.textContent = '';
    }
     
    for (item of items) {
        item.style.visibility = "visible";
    }

    container.style.visibility = "hidden";

    check = 0;

}
