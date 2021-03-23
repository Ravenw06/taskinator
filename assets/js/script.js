// Pick the pretty button that you wanna do something to; put it in a  var or const
// (deleted)var buttonEl = document.querySelector("#save-task");
// buttonEl represents the specific btn with the id*save-task

var formEl = document.querySelector("#task-form");
// select the entire form area instead of the button
var tasksToDoEl = document.querySelector("#tasks-to-do")

// XXXX.addEventListener("click", function() {...}) <=Actually putting in the function that you want to button to do 

var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    // whenever this listItemEl/ entire function is trigger, it creates another <li>
    listItemEl.className = "task-item";
    // gives all the listItemEL the class name to apply css on them
    listItemEl.textContent = "This is a new task.";
    // put text.content in the empty <li>
    tasksToDoEl.appendChild(listItemEl);
    //attached the listItemEl into the tasksToDo location where we selected with doc.query.selector
};
// (deleted)buttonEl.addEventListener("click", createTaskHandler);
// when the save task button is clicked, the addEventListener responses by triggering the createTaskHandler function

formEl.addEventListener("submit", createTaskHandler);
// >>Now the script.js file finds the <form> element in the page and saves it to the variable formEl, so that we can interact with the form and access some of its child HTML elements.