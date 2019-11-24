import sum from './js/sum';
import './styles/style.scss'
import cities from './js/cities';
console.log(sum(1,2))
console.log('Proof that it works')

console.log(cities);

const locationSelect = document.getElementById('location-select');

locationSelect.addEventListener('change', (event) => {
  const city = event.target.value;
  const defaulCity = 'img/skyline.jpg';
  const cityImage = document.getElementById('location-img');

  if(!cities[city]){
    cityImage.src = defaulCity;
    return;
  };

  cityImage.src = cities[city].url;
});

