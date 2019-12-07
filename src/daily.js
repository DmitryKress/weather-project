import cities from './js/cities'
import { getApiDaily } from './js/api'

import { convertData, mini, convertInCelsius } from "./js/helper";

export async function initForDaily () {
  if (localStorage.getItem('nameCity')) {
    const cityImage = document.querySelector('#location__image')
    const city = localStorage.getItem('nameCity')
    cityImage.src = cities[city].url
    const data = await getApiDaily(city)
    filterTime(data)
  }
}
initForDaily();


export function filterTime(data) {
  const dataObject = Object.values(data)[3];
  const resultDataObject = dataObject.map(element => {
    const elemntsDataObject = Object.values(element);
    return elemntsDataObject;
  });
  const newData = resultDataObject.filter(element => {
    const mainDate = new Date(element[0] * 1000);
    const secondDate = new Date(1575460800 * 1000);
    if (mainDate.getHours() === secondDate.getHours()) {
      return mainDate;
    }
  });

  insertDataInDom(newData);

  function insertDataInDom(data) {
    for (let i = 0; i <= 4; i++) {
      const mainblock = document.querySelector(".container__daily");
      const div = document.createElement("div");
      div.classList.add("wrapper-main");
      const divSustain = document.createElement("div");
      divSustain.classList.add("wrapper");
      const clear = document.createElement("div");
      clear.classList.add("wrapper-temp");
      const nameP = document.createElement("p");
      nameP.classList.add("daily__temp");
      const spanP = document.createElement("span");
      const dateP = document.createElement("p");
      dateP.classList.add("daily__title");
      const imgP = document.createElement("img");

      dateP.innerHTML = convertData(data[i][0]);
      nameP.innerHTML = convertInCelsius(data[i][1].temp);
      spanP.innerHTML = "°C";
      mini(imgP, data[i][2][0].main);

      mainblock.append(div);

      div.append(dateP);
      div.append(divSustain);
      divSustain.append(imgP);
      divSustain.append(clear);
      clear.append(nameP);
      clear.append(spanP);
    }
  }
  return newData;
}
