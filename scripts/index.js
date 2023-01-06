const currentDate= new Date();
const currentYearString = currentDate.getFullYear();
document.querySelector("#currentYear").textContent= currentYearString;

const modifiedDate = new Date(document.lastModified);
document.querySelector("#lastModified").textContent=modifiedDate.toLocaleString();