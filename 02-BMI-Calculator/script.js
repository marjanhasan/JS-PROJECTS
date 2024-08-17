const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  results.innerText = "";
  if (isNaN(height) || height <= 0)
    results.appendChild(
      document.createTextNode("Enter valid height [in number]")
    );
  else if (isNaN(weight) || weight <= 0)
    results.appendChild(
      document.createTextNode("Enter valid weight [in number]")
    );
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.appendChild(document.createTextNode(`Results are : ${bmi}`));

    const range = document.querySelectorAll(".range");
    range.forEach((item) => (item.style.color = "#000"));

    const range1 = document.querySelector("#range1");
    const range2 = document.querySelector("#range2");
    const range3 = document.querySelector("#range3");

    if (bmi < 18.6) range1.style.color = "red";
    else if (bmi <= 24.9) range2.style.color = "green";
    else if (bmi > 24.9) range3.style.color = "red";
  }
});
