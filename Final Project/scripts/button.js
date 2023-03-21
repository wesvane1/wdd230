// Nav Button

function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById('hamBtn');
x.onclick = toggleMenu;