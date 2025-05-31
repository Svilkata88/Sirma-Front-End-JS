const btn = document.getElementById("add-button");

btn.addEventListener('click', () => {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    const toDo = document.getElementById('todo-list');

    if (task === "") return;

    const newToDo = document.createElement('li');
    const taskText = document.createTextNode(task);
    newToDo.appendChild(taskText);
    const removeBtn = document.createElement('button');
    newToDo.appendChild(removeBtn)
  
    removeBtn.textContent = 'Remove';

    toDo.appendChild(newToDo);

    removeBtn.addEventListener('click', ()=> {
        newToDo.remove();
    })
})