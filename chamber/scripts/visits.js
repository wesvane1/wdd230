const visits = document.getElementById("visit");

let numVisits = Number(window.localStorage.getItem("visit-ls"));


if (numVisits !== 0) {
  visits.textContent = numVisits;
}
else{
  visits.textContent = "This is your first visit!";
}

numVisits++;

localStorage.setItem("visit-ls", numVisits);