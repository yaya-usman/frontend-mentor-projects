"use strict";

const btn = Array.from(document.querySelectorAll(".btn"));
const prevVal = document.querySelector(".prev-op");
const currVal = document.querySelector(".curr-op");
const body = document.querySelector("body");
const numToggle = Array.from(document.querySelector(".toggle-num").children);

//Toggle implementation
numToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    switch (toggle.textContent) {
      case "2":
        body.classList.add("theme-2");
        body.classList.remove("theme-1");
        body.classList.remove("theme-3");
        break;
      case "3":
        body.classList.add("theme-3");
        body.classList.remove("theme-2");
        body.classList.remove("theme-1");
        break;

      default:
        body.classList.add("theme-1");
        body.classList.remove("theme-2");
        body.classList.remove("theme-3");
    }
  });
});

//adding comma
const formatNumber = (num) => {
  const number = Number(num).toLocaleString("en");
  return number;
};

//button functionality
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "del":
        currVal.textContent = currVal.textContent.slice(0, -1);
        if (!currVal.textContent) prevVal.textContent = "";
        break;
      case "reset":
        prevVal.textContent = "";
        currVal.textContent = "";
        break;
      case "x":
        currVal.textContent += "*";
        break;
      case "=":
        try {
          prevVal.textContent = currVal.textContent;
          currVal.textContent = formatNumber(eval(currVal.textContent));
        } catch (error) {
          currVal.textContent = "Math Error!";
        }
        break;

      default:
        currVal.textContent += e.target.textContent;
    }
  });
});

//keydown press functionality
document.addEventListener("keydown", (e) => {
  for (let i = 0; i < 10; i++) {
    switch (e.key) {
      case String(i):
        currVal.textContent += e.key;
        break;
    }
  }
  switch (e.key) {
    case "+":
      currVal.textContent += e.key;
      break;
    case "-":
      currVal.textContent += e.key;
      break;
    case "/":
      currVal.textContent += e.key;
      break;
    case "*":
      currVal.textContent += e.key;
      break;
    case "Backspace":
      currVal.textContent = currVal.textContent.slice(0, -1);
      break;
    case "Shift":
      break;
    case "Enter":
      try {
        prevVal.textContent = currVal.textContent;
        currVal.textContent = formatNumber(eval(currVal.textContent));
      } catch (error) {
        currVal.textContent = "Math Error!";
      }
      break;
    case "Escape":
      prevVal.textContent = "";
      currVal.textContent = "";
      break;
  }
});
