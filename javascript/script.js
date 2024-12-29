// code for displaying current Time and Date (static)
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
function showTime() {
  let date = now.getDate();
  let hours = now.getHours();
  hours = hours.toString().padStart(2, "0");
  let minutes = now.getMinutes();
  minutes = minutes.toString().padStart(2, "0");
  let year = now.getFullYear();

  let day = days[now.getDay()];

  let timeOfDay = document.querySelector("#time-of-day");
  timeOfDay.innerHTML = `${day} ${hours}:${minutes}`;
}
showTime();
//----------------------------------------------------------------------------------------------------
//** stage 3 **//(last)
// defining the displayweatherinfo tha store the response and ingecting it in html elements
function displayWeatherInfo(response) {
  let temperature = document.querySelector(".current-temperature-value");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  let humidity = document.querySelector("#humidity-value");
  humidity.innerHTML = response.data.temperature.humidity;
  let wind = document.querySelector("#wind-value");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let curentCityName = document.querySelector(".current-city-name");
  curentCityName.innerHTML = response.data.city;

  console.log(response);
}

//** stage 2 **//
/*defining the call back function that calls the api (4steps)( selecting search nput, store its value in "city" get api key, use "city "
 inside query in api url, usea axios method to call api and then call the function to display weather info */
function displayWeatherData(event) {
  event.preventDefault();
  //step 1
  let inputCity = document.querySelector("#search-input");

  //getWeatherApi();
  let city = inputCity.value;

  let apiKey = "d2ebcoe34b6t502be4f636aa01ddf51f";
  let weatherApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(weatherApiUrl).then(displayWeatherInfo);
}

//------ HOW THE CODE RUN ------//
//** stage 1 **//
// listen to a click on the form(2 steps)
//*step 1 selecting thE form
let searchCityForm = document.querySelector("#search-city-form");
//*step 2 adding event listener to the form submit and calling the backfunction of getting the api
searchCityForm.addEventListener("submit", displayWeatherData);
