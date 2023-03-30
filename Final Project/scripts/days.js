const day1 = document.querySelector('#nextDay');
const day2 = document.querySelector('#nextNextDay');
const day3 = document.querySelector('#nextNextDay1');

const test = new Date();
const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const today = test.getDay();

if (today==4)
{
  day1.innerHTML = `<strong>${days[today+1]}</strong>`;
  day2.innerHTML = `<strong>${days[today+2]}</strong>`;
  day3.innerHTML = `<strong>${days[today-4]}</strong>`;
}
else if (today == 5)
{
  day1.innerHTML = `<strong>${days[today+1]}</strong>`;
  day2.innerHTML = `<strong>${days[today-5]}</strong>`;
  day3.innerHTML = `<strong>${days[today-4]}</strong>`;
}
else if (today == 6)
{
  day1.innerHTML = `<strong>${days[today-6]}</strong>`;
  day2.innerHTML = `<strong>${days[today-5]}</strong>`;
  day3.innerHTML = `<strong>${days[today-4]}</strong>`;
}
else{
  day1.innerHTML = `<strong>${days[today+1]}</strong>`;
  day2.innerHTML = `<strong>${days[today+2]}</strong>`;
  day3.innerHTML = `<strong>${days[today+3]}</strong>`;
}