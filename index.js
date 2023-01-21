// First Dice Image

var randomNumber1 = Math.floor( Math.random() * 6) + 1; // Fetching a random number from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // appending the random number to taht of the file name of dice image

var randomImageSource = "./images/" + randomDiceImage ; // fetching the random dice image from the parent folder

var image1 = document.querySelectorAll("img")[0]; // selecting the random dice for first image

image1.setAttribute("src", randomImageSource); // changing the attribute of the image element src to that of the random image source

// Second Dice image

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else 
{

    document.querySelector("h1").innerHTML = "Its a Tie";

}




