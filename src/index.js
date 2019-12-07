import "./styles/style.scss";
import cities from "./js/cities";
//import { init } from "./js/init";
import { getInformation } from "./js/data";
import { getApi } from "./js/api";

const cityImage = document.querySelector("#location__image");
const locationSelect = document.querySelector(".location__select");

locationSelect.addEventListener("change", async event => {
  const city = event.target.value;
  const defaultCity = "img/skyline.jpg";

  if (!cities[city]) {
    cityImage.src = defaultCity;
  } else {
    cityImage.src = cities[city].url;
  }
  localStorage.setItem("nameCity", city);

  const data = await getApi(city);
  getInformation(data);
});

init();
