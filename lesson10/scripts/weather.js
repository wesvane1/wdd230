const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=75caa3fdf9f667d98b42ee52f413891b&units=imperial'

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windChill = document.getElementById('wind-chill')

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function  displayResults(weatherData) {
  const temp = weatherData.main.temp
  const speed = weatherData.wind.speed

  if (temp <= 50 && speed > 3)
  {
    windChill.textContent = `${parseInt(getWindChill(temp, speed))}°F`
  }
  else{
    windChill.textContent="N/A"
  }

  currentTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

function getWindChill(temp, speed){
  return 35.74 + (.6215*temp)-(35.75*(speed**.16))+(.4275*temp*(speed**.16))
}