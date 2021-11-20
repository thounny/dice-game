var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

var randomDiceImg = "dice" + randomNumber1 + ".png"; // string from dice1.png to dice6.png = change source of img to random number

var randomImgSource = "images/" + randomDiceImg; // Images/dice1.png to Images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSource2 = "images/dice" + randomNumber2 + ".png"; // string from and change source of img to random Images/dice1.png to Images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);




if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "💦💥😎😈💯✔💲™ Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "💦💥😎😈💯✔💲™ Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "DRAW! 💤💦💤💦";

}