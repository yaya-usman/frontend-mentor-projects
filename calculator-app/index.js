"use strict";

const btn = Array.from(document.querySelectorAll(".btn"));
const prevVal = document.querySelector(".prev-op");
const currVal = document.querySelector(".curr-op");

//adding comma
const formatNumber = (num) => {
  return Number(num).toLocaleString("en");
};

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "del":
        currVal.textContent = currVal.textContent.slice(0, -1);
        break;
      case "reset":
        prevVal.textContent = "";
        currVal.textContent = "";
        break;
        
      case "=":
        try {
          prevVal.textContent = currVal.textContent;
          currVal.textContent = eval(currVal.textContent);
        } catch (error) {currVal.textContent = 'Math Error!'}
        break;

      default:
        currVal.textContent += e.target.textContent;
    }
  });
});
