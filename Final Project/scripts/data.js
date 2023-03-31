const link = "JSON/smoothie.json"

// Increment count when button is clicked
let count = 0;
const button = document.querySelector('input[type="button"]');
button.addEventListener('click', () => {
  count++;
  localStorage.setItem('count', count);
});

// Save count to Local Storage
localStorage.setItem('count', count);


async function getSmoothieData(){
  const response = await fetch(link);
  const data = await response.json();
  // console.log(data.fruit)
  generateOptions(data.fruit);
}

getSmoothieData()

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

async function f(){
  const response = await fetch(link);
  const data = await response.json();
  const f1 = document.getElementById("fruit1");
  const f2 = document.getElementById("fruit2");
  const f3 = document.getElementById("fruit3");

  const selectedItem1 = f1.options[f1.selectedIndex].value;
  const fruit1Index = f1.selectedIndex;

  const carb1 = (data.fruit[fruit1Index].nutritions.carbohydrates);
  const pro1 = (data.fruit[fruit1Index].nutritions.protein)
  const fat1 = (data.fruit[fruit1Index].nutritions.fat)
  const sug1 = (data.fruit[fruit1Index].nutritions.sugar)

  const selectedItem2 = f2.options[f2.selectedIndex].value;
  const fruit2Index = f2.selectedIndex;
  const carb2 = (data.fruit[fruit2Index].nutritions.carbohydrates);
  const pro2 = (data.fruit[fruit2Index].nutritions.protein)
  const fat2 = (data.fruit[fruit2Index].nutritions.fat)
  const sug2 = (data.fruit[fruit2Index].nutritions.sugar)

  const selectedItem3 = f3.options[f3.selectedIndex].value;
  const fruit3Index = f3.selectedIndex;
  const carb3 = (data.fruit[fruit3Index].nutritions.carbohydrates);
  const pro3 = (data.fruit[fruit3Index].nutritions.protein)
  const fat3 = (data.fruit[fruit3Index].nutritions.fat)
  const sug3 = (data.fruit[fruit3Index].nutritions.sugar)


  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  console.log(fulldate);
  
  console.log("Your selected fruits are as follows: " + selectedItem1 + ", "+ selectedItem2 + ", " + selectedItem3);

  const divContainer = document.querySelector('#output');

  const nutrition = document.createElement('p');
  const carbb = document.createElement('p');
  const prott = document.createElement('p');
  const fatt = document.createElement('p');
  const sugg = document.createElement('p');

  nutrition.textContent = "Nutritional facts for 1 "+ selectedItem1 + ", 1 " + selectedItem2 + " and 1 " + selectedItem3
  carbb.textContent = ("total Carbs: " + (carb1+carb2+carb3));
  prott.textContent = ("total Protein: " + (pro1+pro2+pro3));
  fatt.textContent = ("total Fat: " + (fat1+fat2+fat3));
  sugg.textContent = ("total Sugar: " + (sug1+sug2+sug3));

  divContainer.appendChild(nutrition);
  divContainer.appendChild(carbb);
  divContainer.appendChild(prott);
  divContainer.appendChild(fatt);
  divContainer.appendChild(sugg);

}