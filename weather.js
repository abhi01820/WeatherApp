
//api.openweathermap.org/data/2.5/weather?q=jammu%20and%20kashmir&appid=22db50e01fd7cb2fe7a8394536a81461&units=metric -->
const apiKey = "22db50e01fd7cb2fe7a8394536a81461";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  }
  else {

  }
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  }
}


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

