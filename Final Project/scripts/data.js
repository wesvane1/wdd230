const link = "JSON/smoothie.json"

async function getSmoothieData(){
  const response = await fetch(link);
  const data = await response.json();
  generateOptions(data.fruit);
}

getSmoothieData()

// This populates the area where user can select fruit
const generateOptions = (fruit) => {
  const fruit1 = document.getElementById("fruit1");
  const fruit2 = document.getElementById("fruit2");
  const fruit3 = document.getElementById("fruit3");

  const fruitArray = [fruit1, fruit2, fruit3];

  fruitArray.forEach(i =>{
    fruit.forEach(fruit => {
      let option = document.createElement('option');
      option.value = fruit.name;
      option.innerText = fruit.name;
      i.appendChild(option);
    });
  });
};


// This is the output: When a user creates a drink
async function f(){
  const response = await fetch(link);
  const data = await response.json();
  const fName = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const f1 = document.getElementById("fruit1");
  const f2 = document.getElementById("fruit2");
  const f3 = document.getElementById("fruit3");
  const tArea = document.getElementById('textArea').value;

  const selectedItem1 = f1.options[f1.selectedIndex].value;
  const fruit1Index = f1.selectedIndex;

  const carb1 = (data.fruit[fruit1Index].nutritions.carbohydrates);
  const pro1 = (data.fruit[fruit1Index].nutritions.protein)
  const fat1 = (data.fruit[fruit1Index].nutritions.fat)
  const cal1 = (data.fruit[fruit1Index].nutritions.calories)
  const sug1 = (data.fruit[fruit1Index].nutritions.sugar)

  const selectedItem2 = f2.options[f2.selectedIndex].value;
  const fruit2Index = f2.selectedIndex;
  const carb2 = (data.fruit[fruit2Index].nutritions.carbohydrates);
  const pro2 = (data.fruit[fruit2Index].nutritions.protein)
  const fat2 = (data.fruit[fruit2Index].nutritions.fat)
  const cal2 = (data.fruit[fruit2Index].nutritions.calories)
  const sug2 = (data.fruit[fruit2Index].nutritions.sugar)

  const selectedItem3 = f3.options[f3.selectedIndex].value;
  const fruit3Index = f3.selectedIndex;
  const carb3 = (data.fruit[fruit3Index].nutritions.carbohydrates);
  const pro3 = (data.fruit[fruit3Index].nutritions.protein)
  const fat3 = (data.fruit[fruit3Index].nutritions.fat)
  const cal3 = (data.fruit[fruit3Index].nutritions.calories)
  const sug3 = (data.fruit[fruit3Index].nutritions.sugar)

  const output = `
  <div id="output2">
    <h2>Smoothie Created!</h2>
    <p><strong>Name:</strong> ${fName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Selected Fruits:</strong> ${selectedItem1}, ${selectedItem2}, ${selectedItem3}</p>
    <p><strong>Special Instructions:</strong> ${tArea}</p>
    <p><strong>Order Date:</strong> ${new Date().toLocaleString()}</p>
    <hr>
    <h3>Nutritional Facts</h3>
    <p><strong>Calories:</strong> ${(cal1+cal2+cal3).toFixed(2)} kcal</p>
    <p><strong>Carbs:</strong> ${(carb1+carb2+carb3).toFixed(2)} g</p>
    <p><strong>Protein:</strong> ${(pro1+pro2+pro3).toFixed(2)} g</p>
    <p><strong>Fat:</strong> ${(fat1+fat2+fat3).toFixed(2)} g</p>
    <p><strong>Sugar:</strong> ${(sug1+sug2+sug3).toFixed(2)} g</p>
  </div>
  `
  const divContainer = document.querySelector('#output');
  divContainer.innerHTML = output;

  // This stores the number of drinks made by each user
  let numOfDrinks = parseInt(localStorage.getItem('numOfDrinks')) || 0;
  numOfDrinks++;
  localStorage.setItem('numOfDrinks', numOfDrinks);
}

const createDrink = document.getElementById('createDrink1');
createDrink.addEventListener('click', f)