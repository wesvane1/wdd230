let temp = 35;
let wind = 5;
let windChill = (temp-(wind*.7));

document.querySelector('#t').textContent = temp;
document.querySelector('#w').textContent = wind;

document.querySelector('#wc').textContent = windChill;