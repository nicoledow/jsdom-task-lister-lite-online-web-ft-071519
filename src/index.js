const button = document.getElementById('create-new-task-button');

button.addEventListener('click', addItemToList);

function addItemToList() {
  let ul = document.getElementById('tasks');
  let li = document.createElement('li');
  li.className = 'task-item'
  let newButton = document.createElement('button');
  newButton.className = 'delete-btn';
  newButton.innerText = 'X';

  ul.appendChild(li);
  li.innerText = document.getElementById('new-task-description').value;
  li.appendChild(newButton)
}



document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('submit', function(event) {
  event.preventDefault();
});






