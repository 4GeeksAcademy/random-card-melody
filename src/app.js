/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCardGen() {
  let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suit = ["♦", "♥", "♠", "♣"];
  let randomValue = Math.floor(Math.random() * value.length);
  let randomSuit = Math.floor(Math.random() * suit.length);
  document.querySelector("#topSuit").innerHTML = suit[randomSuit];
  document.querySelector("#bottomSuit").innerHTML = suit[randomSuit];
  document.querySelector("#number").innerHTML = value[randomValue];
  document.querySelector(".card").style.color =
    randomSuit <= 1 ? "red" : "black";
}

window.onload = function() {
  randomCardGen();
  document.querySelector("#button").addEventListener("click", randomCardGen);
};

/* setInterval(randomCardGen, 10000); */

function startCountdown(seconds) {
  let counter = seconds;

  const interval = setInterval(() => {
    counter--;

    if (counter == 0) {
      randomCardGen();
      counter = 10;
    }
  }, 1000);
}

/* function newCardCountdown(){
  counterID= setInterval(()=>{
    counterTime--;
    if(counterTime==0){
     generateRandomCard();
     counterTime= 10;
    }
    counterElement.innerHTML= counterTime;
  }, 1000);
} */
