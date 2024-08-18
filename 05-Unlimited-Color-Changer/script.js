const hex = "0123456789ABCDEF";
let refInterval;

const generateRandomNumber = () => {
  let color = "#";
  let randomNumber;
  for (let i = 0; i < 6; i++) {
    randomNumber = Math.floor(Math.random() * 16);
    color += hex[randomNumber];
  }
  return color;
};

document.querySelector("#start").addEventListener("click", (e) => {
  refInterval = setInterval(() => {
    document.body.style.backgroundColor = generateRandomNumber();
  }, 1000);
});

document.querySelector("#stop").addEventListener("click", (e) => {
  clearInterval(refInterval);
  refInterval = null;
});
