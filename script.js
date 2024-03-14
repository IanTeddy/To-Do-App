// event lister for add button
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", addTask);

// allow user to add new task by pressing keyboard "Enter" button
const input = document.getElementById('input');
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
});

// function for adding a new task and checkbox to the list
function addTask(){
    // get a value(task) that user input
    var inputValue = document.getElementById("input").value;
    // only if a user enter a new task, add a new task to <ul>
    if(inputValue !== ''){
        // create a checkbox with attributes
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "listCheckbox";
        checkbox.name = "listCheckbox";
        
        // create a <li> element
        let newTask = document.createElement('li');
        // create a text string from value
        let taskName = document.createTextNode(inputValue);
        // add a checkbox to new <li>
        newTask.appendChild(checkbox);
        // add a new <li> with input text
        newTask.appendChild(taskName);
        newTask.className = 'task';
        // add the new task to the list<ul>
        document.querySelector("ul").appendChild(newTask);
    }
    // clear the input field 
    document.getElementById("input").value = "";
};


// function for handling checkbox changes when task is done
const selectedBox = document.querySelector('.listCheckbox');
const checkedTask = document.querySelector('.task');

// querySelectorAll returns a static (not live) list of elements.
var list = document.querySelector('ul');

selectedBox.addEventListener('change', (event) =>  {
  if (event.target.tagName === 'li') {
    event.target.classList.toggle('checked');
  }
}, false);





