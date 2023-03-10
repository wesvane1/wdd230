const modifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML=modifiedDate.toLocaleString();

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () =>{
  if (input.value !== ''){
    let chapter = input.value

    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.textContent = chapter;
    deleteBtn.textContent='❌';
    deleteBtn.addEventListener('click', () =>{
      list.removeChild(li);
    });

    list.appendChild(li);
    li.appendChild(deleteBtn);
    
  }
  input.value = '';
  input.focus();
});