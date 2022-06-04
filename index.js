//player 1
var  randomNumber1=Math.floor((Math.random()*6)+1);
var imageSource="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imageSource);

//player 2

var  randomNumber2=Math.floor((Math.random()*6)+1);
var secondImageSource="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",secondImageSource);


if(randomNumber1>randomNumber2){
    document.getElementsByClassName("result")[0].innerHTML="player 1 wins";
}else{
    document.getElementsByClassName("result")[0].innerHTML="player 2 wins";
}
if(randomNumber1==randomNumber2){
    document.getElementsByClassName("result")[0].innerHTML="Draw!";
    function myFunction() {
        document.getElementsByClassName("result")[0].innerHTML="Refresh Me";
      }
    setTimeout(myFunction, 2000);
}