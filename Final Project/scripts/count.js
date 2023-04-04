let numOfDrinks = parseInt(localStorage.getItem('numOfDrinks')) || 0;

document.getElementById('counter').textContent =
  `${numOfDrinks} ${numOfDrinks === 1 ? 'drink':'drinks'}!`;