const day1 = document.querySelector('#nextDay');
const day2 = document.querySelector('#nextNextDay');
const day3 = document.querySelector('#nextNextDay1');

const test = new Date();
var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let tomorrow = test.getDay();

if (tomorrow==4)
{
  day1.innerHTML = `<strong>${days[tomorrow+1]}</strong>`;
  day2.innerHTML = `<strong>${days[tomorrow+2]}</strong>`;
  day3.innerHTML = `<strong>${days[tomorrow-4]}</strong>`;
}
else if (tomorrow == 5)
{
  day1.innerHTML = `<strong>${days[tomorrow+1]}</strong>`;
  day2.innerHTML = `<strong>${days[tomorrow-5]}</strong>`;
  day3.innerHTML = `<strong>${days[tomorrow-4]}</strong>`;
}
else if (tomorrow == 6)
{
  day1.innerHTML = `<strong>${days[tomorrow-6]}</strong>`;
  day2.innerHTML = `<strong>${days[tomorrow-5]}</strong>`;
  day3.innerHTML = `<strong>${days[tomorrow-4]}</strong>`;
}
else{
  day1.innerHTML = `<strong>${days[tomorrow+1]}</strong>`;
  day2.innerHTML = `<strong>${days[tomorrow+2]}</strong>`;
  day3.innerHTML = `<strong>${days[tomorrow+3]}</strong>`;
}