function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById('hamBtn');
x.onclick = toggleMenu;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

const datefield = document.getElementById("currentDate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

let currentYear = new Date();
let year = currentYear.getFullYear();
document.getElementById('currentYear').innerHTML = year;