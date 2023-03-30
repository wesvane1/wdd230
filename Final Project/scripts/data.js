const link = "JSON/smoothie.json"

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