import cities from "./cities";
import { getApi } from "./api";
import { getInformation } from "./data";

export async function init() {
  if (localStorage.getItem("nameCity")) {
    const cityImage = document.querySelector("#location__image");
    const city = localStorage.getItem("nameCity");
    cityImage.src = cities[city].url;
    const data = await getApi(city);
    getInformation(data);
  }
}
