const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

document.querySelector("h1").textContent = "Aranhaverso"; // Para não alterar via html

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i = 0; i < 5; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/pic${i + 1}.jpg`);
  newImage.setAttribute("alt", `picture${i + 1}`);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", function () {
    //pega atributo src e alt da img atual
    const fonte = this.getAttribute("src");
    const alternative = this.getAttribute("alt");

    //seta atributo src e alt na img principal
    displayedImage.setAttribute("src", fonte);
    displayedImage.setAttribute("alt", alternative);
  });
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", function () {
  const classBtn = this.getAttribute("class");

  if (classBtn === "dark") {
    this.setAttribute("class", "light");
    this.textContent = "Lighten";
    overlay.style.setProperty("background-color", "rgba(0,0,0,0.5)");
  } else {
    this.setAttribute("class", "dark");
    this.textContent = "Darken";
    overlay.style.setProperty("background-color", "rgba(0,0,0,0)");
  }
});
