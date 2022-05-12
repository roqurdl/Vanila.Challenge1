import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const h2 = document.querySelector("h2");

const superEventHandler = {
  offmouse: function () {
    h2.style.color = colors[0];
    h2.innerText = "The mouse is gone!";
  },
  onmouse: function () {
    h2.style.color = colors[1];
    h2.innerText = "The mouse is here!";
  },
  winresize: function () {
    h2.style.color = colors[2];
    h2.innerText = "You just resized!";
  },
  rightclick: function () {
    h2.style.color = colors[3];
    h2.innerText = "That was a right click!";
  }
};
h2.addEventListener("mouseleave", superEventHandler.offmouse);
h2.addEventListener("mouseenter", superEventHandler.onmouse);
window.addEventListener("resize", superEventHandler.winresize);
window.addEventListener("contextmenu", superEventHandler.rightclick);
