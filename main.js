// first dice
var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "Images/dice-" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

// second dice
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "Images/dice-" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

if(randomDiceImage1 > randomDiceImage2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomDiceImage1 < randomDiceImage2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Game Draw";
}