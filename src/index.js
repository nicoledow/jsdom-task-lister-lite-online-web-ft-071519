const button = document.getElementById('create-new-task-button');
const deleteButtons = document.getElementsByClassName('delete-button');
const menu = document.getElementById('priority-menu')


button.addEventListener('click', addItemToList);

function addItemToList() {
  let ul = document.getElementById('tasks');
  let li = document.createElement('li');
  li.className = 'task-item'
  let newButton = document.createElement('button');
  let dueDate = document.getElementById('new-task-due-date').value;
  newButton.className = 'delete-btn';
  newButton.innerText = 'X';

  ul.appendChild(li);
  li.innerText = document.getElementById('new-task-description').value + ` (due ${dueDate})`
  li.appendChild(newButton)

  newButton.addEventListener('click', () => {
    newButton.parentElement.parentElement.removeChild(newButton.parentElement);
  });


  changeTextColor(li, menu.selectedIndex)
  
}

function changeTextColor(item, index) {
  if(index === 1) {
    item.style.color = "red";
  } else if(index === 2) {
    item.style.color = "yellow";
  } else if(index === 3) {
    item.style.color = "green";
  } 
}


document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('submit', function(event) {
  event.preventDefault();
});






