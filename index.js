var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

var randomImgSource1 = "images/dice" + randomNumber1 + ".png"; // string change soure of Images/dice1.png to Images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImgSource1);


// dice 2 random number generator

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