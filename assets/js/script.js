// Pick the pretty button that you wanna do something to; put it in a  var or const
var buttonEl = document.querySelector("#save-task");
// buttonEl represents the specific btn with the id*save-task
var tasksToDoEl = document.querySelector("#tasks-to-do")

// XXXX.addEventListener("click", function() {...}) <=Actually putting in the function that you want to button to do 

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    // whenever this listItemEl/ entire function is trigger, it creates another <li>
    listItemEl.className = "task-item";
    // gives all the listItemEL the class name to apply css on them
    listItemEl.textContent = "This is a new task.";
    // put text.content in the empty <li>
    tasksToDoEl.appendChild(listItemEl);
    //attached the listItemEl into the tasksToDo location where we selected with doc.query.selector
}
buttonEl.addEventListener("click", createTaskHandler);
// when the save task button is clicked, the eventlistenser responses by triggering the createTaskHandler function

