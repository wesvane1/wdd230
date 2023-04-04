const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1412&lon=117.3205&appid=75caa3fdf9f667d98b42ee52f413891b&units=imperial&cnt=5'


const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humidity')
const highLow = document.querySelector('#highlow');
const highLow1 = document.querySelector('#highLow1');
const highLow2 = document.querySelector('#highLow2');
const highLow3 = document.querySelector('#highLow3');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
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
  const humidity1 = weatherData.list[0].main.humidity;
  const temp = weatherData.list[0].main.temp;
  const high = weatherData.list[0].main.temp_max;
  const low = weatherData.list[0].main.temp_min;

  const high1 = weatherData.list[1].main.temp_max;
  const low1 = weatherData.list[1].main.temp_min;

  const high2 = weatherData.list[2].main.temp_max;
  const low2 = weatherData.list[2].main.temp_min;

  const high3 = weatherData.list[3].main.temp_max;
  const low3 = weatherData.list[3].main.temp_min;

  humidity.innerHTML = `<strong>${humidity1.toFixed(1)}</strong>`;
  currentTemp.innerHTML = `<strong>${temp.toFixed(1)}</strong>`;
  highLow.innerHTML = `<strong>${high.toFixed(1)}/${low.toFixed(1)}`;

  highLow1.innerHTML = `<strong>${high1.toFixed(1)}/${low1.toFixed(1)}`;

  highLow2.innerHTML = `<strong>${high2.toFixed(1)}/${low2.toFixed(1)}`;

  highLow3.innerHTML = `<strong>${high3.toFixed(1)}/${low3.toFixed(1)}`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  const desc = weatherData.list[0].weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}