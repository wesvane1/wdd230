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

let currentDay = new Date();
let day = currentDay.getDay();

// if the day is monday or tuesday
if (day == 4 || day == 0){
  const headerRef = document.getElementsByTagName('header')[0];
  let banner = document.createElement('h3');
  banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  headerRef.append(banner);
  banner.style.textAlign = 'center';
  banner.style.display = 'flex';
  banner.style.backgroundColor = 'white';
  banner.style.gridColumn = '3';
  banner.style.gridRow = '3';
  banner.style.margin= '10px'
  banner.style.marginTop = '50px';
  banner.style.borderRadius = '10px';
}