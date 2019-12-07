const API_KEY = "6b6eaf2f6de7056f1c44e9569ca027ee";

export function getApi(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  ).then(response => response.json());
}
export function getApiForecast(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
  ).then(response => response.json());
}
