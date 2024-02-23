/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const topSuit = document.getElementById("topSuit");
const number = document.getElementById("number");
const bottomSuit = document.getElementById("bottomSuit");

function cardGenerator() {
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let cardSuit = ["♦", "♥", "♠", "♣"];
  let randomNumber = Math.floor(Math.random() * cardNumber.length);
  let randomSuit = Math.floor(Math.random() * cardSuit.length);
}

topSuit.innerText = cardSuit[randomSuit];
bottomSuit.innerText = cardSuit[randomSuit];
Number.innerText = cardNumber[randomNumber];

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector(".card").innerHTML = cardGenerator();
  });
};

/* function button() {
  let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suit = ["♦", "♥", "♠", "♣"];
  let randomValue = Math.floor(Math.random() * value.length);
  let randomSuit = Math.floor(Math.random() * suit.length);
  document.querySelector("#topSuit").innerHTML = suit[randomSuit];
  document.querySelector("#bottomSuit").innerHTML = suit[randomSuit];
  document.querySelector("#number").innerHTML = value[randomValue];
  document.querySelector(".card").style.color =
    randomSuit <= 1 ? "red" : "black";
} */
