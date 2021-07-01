"use strict";

const btn = Array.from(document.querySelectorAll(".btn"));
const prevVal = document.querySelector(".prev-op");
const currVal = document.querySelector(".curr-op");
const body = document.querySelector('body');
const numToggle = Array.from(document.querySelector(".toggle-num").children);

//Toggle implementation
numToggle.forEach(toggle => {
    toggle.addEventListener('click', () =>{
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
    })
    
})

//adding comma
const formatNumber = (num) => {
  const test = Number(num).toLocaleString("en");
  // return String(test);
  return test;
};

//calculator functionality
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
          currVal.textContent = eval(currVal.textContent);
        } catch (error) {
          currVal.textContent = "Math Error!";
        }
        break;

      default:
        currVal.textContent += e.target.textContent;
    }
  });
});

