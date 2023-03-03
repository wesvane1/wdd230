const temp = document.querySelector('#t').textContent;
const wind = document.querySelector('#w').textContent;
const windChill = document.querySelector('#wc');

function getWindChill(temp, wind){
  return 35.74 + (.6215*temp)-(35.75*(wind**.16))+(.4275*temp*(wind**.16))
}

if (temp <= 50 && wind > 3)
{
  windChill.textContent = `${parseInt(getWindChill(temp, wind))}°F`
}
else{
  windChill.textContent="N/A"
}

// const temperature = document.getElementById("t").textContent;
// const windSpeed = document.getElementById("w").textContent;
// const windChill = document.getElementById("wc");

// function getWindChill(temperature, windSpeed) {
//   return 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));
// }

// if (temperature <= 50 && windSpeed > 3) {
//   windChill.textContent = `${parseInt(getWindChill(temperature, windSpeed))}°`;
// } else {
//   windChill.textContent = "N/A";
// }

