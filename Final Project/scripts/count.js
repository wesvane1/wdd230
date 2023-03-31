const count = localStorage.getItem('count');
console.log(`The count is ${count}.`);

const drinkCount = document.getElementById('createDrink');

if (count == 1)
{
  drinkCount.innerHTML = `<strong>${count} drink</strong>`
}
else{
  drinkCount.innerHTML = `<strong>${count} drinks</strong>`
}