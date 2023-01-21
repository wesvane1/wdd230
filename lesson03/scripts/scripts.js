let currentYear = new Date();
let year = currentYear.getFullYear();
document.getElementById("currentYear").innerHTML=year;

let time = new Date();
let lastModified = time.toLocaleString();
document.getElementById("lastModified").innerHTML=lastModified;