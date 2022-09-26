/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//console.log("Hello Rigo from the console!");

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  // step 1 //
  let excusePart1 = Math.floor(Math.random() * who.length);
  // step 2 //
  let excusePart2 = Math.floor(Math.random() * what.length);
  // step 3 //
  let excusePart3 = Math.floor(Math.random() * when.length);
  // step 4 //
  let excuse = who[excusePart1] + what[excusePart2] + when[excusePart3];

  document.querySelector("#excuse").innerHTML = excuse;
  return excuse;
};
