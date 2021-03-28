// Stopped at n 4.3.7

var pageContentEl = document.querySelector("#page-content");
// initial a selection area of the page-content for targeting delete button
var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
}
var taskIdCounter = 0;

// Pick the pretty button that you wanna do something to; put it in a  var or const
// (deleted)var buttonEl = document.querySelector("#save-task");
// buttonEl represents the specific btn with the id*save-task

var formEl = document.querySelector("#task-form");
// select the entire form area instead of the button
var tasksToDoEl = document.querySelector("#tasks-to-do")

// XXXX.addEventListener("click", function() {...}) <=Actually putting in the function that you want to button to do 

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // taskNameInput is selecting and storing the input of the #task-name and grabbing only the (.value) value-property from all underlying data
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //package up data as an object
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!")
        return false;
    }
    formEl.reset();
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    createTaskEl(taskDataObj);
};
var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);
    
    actionContainerEl.appendChild(editButtonEl);
    
    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);
    // attribute keeps track of which specific data is being selected and gives it an unique id for local use  
    
    actionContainerEl.appendChild(deleteButtonEl);
    var statusSelectEl = document.createElement("select");
    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i <statusChoices.length; i++) {
        // create option element
        var statusOptionEl = document.createElement('option');
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute('value', statusChoices[i]);
        //append to select
        statusSelectEl.appendChild(statusOptionEl)
    }
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(statusSelectEl);
    return actionContainerEl;


};
    // listItemEl.className = "task-item";
    // // gives all the listItemEL the class name to apply css on them
    // listItemEl.textContent = taskNameInput;
    // // put text.content in the empty <li>
    // tasksToDoEl.appendChild(listItemEl);
    // //attached the listItemEl into the tasksToDo location where we selected with doc.query.selector

// (deleted)buttonEl.addEventListener("click", createTaskHandler);
// when the save task button is clicked, the addEventListener responses by triggering the createTaskHandler function
var createTaskEl = function(taskDataObj) {

    var listItemEl = document.createElement("li");
    // whenever this listItemEl/ entire function is trigger, it creates another <li>
    listItemEl.className = "task-item";
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-into";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    tasksToDoEl.appendChild(listItemEl);

    taskIdCounter++;
}
formEl.addEventListener("submit", taskFormHandler);
// >>Now the script.js file finds the <form> element in the page and saves it to the variable formEl, so that we can interact with the form and access some of its child HTML elements.
var taskButtonHandler = function(event) {
    // function(event) =  when the user or the browser manipulates a page(anything)
    console.log(event.target);
    if (event.target.matches(".delete-btn")) {
        // alright if the user click the delete-btn class specifically, how would you like to react/ show 
        var taskId = event.target.getAttribute("data-task-id");
        deleteTask(taskId);
    }
};
pageContentEl.addEventListener("click", taskButtonHandler);