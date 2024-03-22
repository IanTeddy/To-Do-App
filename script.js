// event lister for add button
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", addTask);

// allow user to add new task by pressing keyboard "Enter" button
const input = document.getElementById('input');
input.focus();
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
});

/*
    function for adding a new task and checkbox to the list
*/ 
// Create an empty array to store list items
var taskArray = [];

function addTask(){
    // get a value(task) that user input
    var inputValue = document.getElementById("input").value;
    // only if a user enter a new task, add a new task to <ul>
    if(inputValue !== ''){
        // create an unchecked button element
        var uncheckedBtn = document.createElement('button');
        uncheckedBtn.type = 'button';
        uncheckedBtn.setAttribute('class', 'unchecked-button');
        let boxIcon = document.createElement('img');
        boxIcon.src ='images/square-regular.svg';
        boxIcon.className = 'checkedbox-icon'
        uncheckedBtn.appendChild(boxIcon);
        uncheckedBtn.addEventListener('click', complete);

        // create a trash box icon
        var trashBtn = document.createElement('button');
        trashBtn.setAttribute('class', 'trash-button');
        let trashIcon = document.createElement('img');
        trashIcon.src ='images/trash-solid.svg';
        trashIcon.className = 'trash-icon';
        trashBtn.appendChild(trashIcon);
        trashBtn.addEventListener('click', deleteTask);

        // create a <li> element
        let newTask = document.createElement('li');
        newTask.className = 'task';
        // add a new task to the array
        taskArray.push(newTask);  
        // Create a <span> element for the editable text
        let taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = inputValue;
        // Make added task text editable
        taskTextSpan.setAttribute('contenteditable', 'true');
        // Add the span to the <li>
        newTask.appendChild(taskTextSpan);

        // add a unchecked box to task
        newTask.appendChild(uncheckedBtn);
        // add a new <li> with input text
        newTask.appendChild(taskTextSpan);
        // add a trash box to task
        newTask.appendChild(trashBtn);
        // add the new task to the list<ul>
        document.querySelector("ul").appendChild(newTask);
    }
    // clear the input field 
    document.getElementById("input").value = "";
};

/*
    handle the list when a task is checked /compeletd
*/ 
var list = document.querySelector('ul');
function complete(e){
    // get a task <li> element that closest from the check button
    const selectedTask = e.target.closest('li');
    /** just to confirm on console **/
    console.log(selectedTask); 
    // get the icon image
    let checkboxIcon = e.target.closest('img');

    // Toggle stylying to 'checked' 
    selectedTask.classList.toggle('checked');

    // Check if the selected task is already 'checked' or not
    if (selectedTask.classList.contains('checked')) {
        // change the icon of checkbox
        checkboxIcon.src ='images/square-check-solid (1).svg';
        // Make it not editable after complete
        selectedTask.setAttribute('contenteditable','false');
        // send the task to the bottom of the list
        list.appendChild(selectedTask);
    } else {
        // change back to uncheckedbox icon
        checkboxIcon.src ='images/square-regular.svg';
        // Make it editable again
        selectedTask.setAttribute('contenteditable','true');
    }
}

/*
    function for deleting tasks when a trash icon is clicked
*/
function deleteTask(e){
    let task = e.target.closest('li');
    task.style.display = "none";
}

// clear all task function
const clearbtn = document.getElementById('clearAll-btn');
// event listener for clear button
clearbtn.addEventListener('click', function(){
    // get all <li> elements inside <ul>
    let list = document.querySelectorAll('#tasklist li');
    // iterate throgh 
    for(var i = 0; targetTask = list[i]; i++) {
        targetTask.parentNode.removeChild(targetTask);
    }
});




