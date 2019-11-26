import sum from "./js/sum";
import "./styles/style.scss";
import cities from "./js/cities";
console.log(sum(1, 2));
console.log("Proof that it works");

console.log(cities);

const locationSelect = document.getElementById("location-select");

locationSelect.addEventListener("change", event => {
  const city = event.target.value;
  const defaulCity = "img/skyline.jpg";
  const cityImage = document.getElementById("location-img");
  localStorage.setItem("cityImage", cityImage);
  console.log(localStorage);

  if (!cities[city]) {
    cityImage.src = defaulCity;
    return;
  }

  cityImage.src = cities[city].url;
});

fetch("6b6eaf2f6de7056f1c44e9569ca027ee")
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
  });
