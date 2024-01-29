var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var src1 = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", src1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var src2 = "./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", src2);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🎉";
}