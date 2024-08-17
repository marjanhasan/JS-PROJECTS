const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
