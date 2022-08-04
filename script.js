
// API_KEY for maps api
let API_KEY = "fc39509735d16c387a703261ab6b8197";

getWeatherData = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  return fetch(URL).then(response => response.json()).then(data => data)

}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  let weatherData = await getWeatherData(city)
  console.log(weatherData);
  showWeatherData(weatherData)
}

const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  const temp = document.getElementById("temp")
  const minTemp = document.getElementById("min-temp")
  const maxTemp = document.getElementById("max-temp")

  document.getElementById("weather-type").innerText = weatherData.weather[0].main
  document.getElementById("city-name").innerText = weatherData.name

  temp.innerText = weatherData.main.temp
  minTemp.innerText = weatherData.main.temp_min
  maxTemp.innerText = weatherData.main.temp_max


}
