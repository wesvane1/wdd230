const link = "JSON/smoothie.json"

async function getSmoothieData(){
  const response = await fetch(link);
  const data = await response.json();
  // console.log(data.fruit)
  displayRandomFruit(data.fruit);
}

getSmoothieData()

const displayRandomFruit = (fruit) =>{
  const fruit1 = document.querySelector("#fruit1");
  const randint1 = getRandomInt(fruit.length);

  const fruit2 = document.querySelector("#fruit2");
  const randint2 = getRandomInt(fruit.length);

  const fruit3 = document.querySelector("#fruit3");
  const randint3 = getRandomInt(fruit.length);

  fruit1.textContent=`${fruit[randint1].name}`;
  fruit2.textContent=`${fruit[randint2].name}`;
  fruit3.textContent=`${fruit[randint3].name}`;
}

// This gets a random number
function getRandomInt(max){
  return Math.floor(Math.random()*max)
}