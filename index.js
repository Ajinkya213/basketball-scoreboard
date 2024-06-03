let elHscore = document.getElementById("score-home")
let elGscore = document.getElementById("score-guest")

let h = 0, g = 0;

function plusOneHome(){
    h++;
    elHscore.textContent = h
}

function plusTwoHome(){
    h+=2;
    elHscore.textContent = h
}

function plusThreeHome(){
    h+=3;
    elHscore.textContent = h
}

function plusOneGuest(){
    g++;
    elGscore.textContent = g
}

function plusTwoGuest(){
    g+=2;
    elGscore.textContent = g
}

function plusThreeGuest(){
    g+=3;
    elGscore.textContent = g
}

function reset(){
    h = 0, g = 0;
    elHscore.textContent = h;
    elGscore.textContent = g
}