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
