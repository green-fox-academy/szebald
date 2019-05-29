"use strict";

const lovecats = document.querySelector("#lovecats");
const submit = document.querySelector("#signup");

const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const dog = document.querySelector("#dog");
const cat = document.querySelector("#cat");
const goldfish = document.querySelector("#fish");

window.addEventListener("click", () => {
  if (
    dog.checked === true ||
    cat.checked === true ||
    goldfish.checked === true
  ) {
    submit.disabled = false;
  }
});

window.addEventListener("click", () => {
  if (yes.checked === true) {
    lovecats.disabled = false;
  } else if (yes.checked === false) {
    lovecats.disabled = true;
  }
});

lovecats.addEventListener("click", () => {
  alert("Thank you, you've successfully signed up for cat facts");
});

submit.addEventListener("click", () => {
  if (yes.checked === false) {
    alert("Sigh, we still added you to the cat facts list");
  } else {
    alert("Thank you, you've successfully signed up for cat facts");
  }
});
