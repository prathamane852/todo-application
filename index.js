// adding a events inside DOM

// start working on buttons
let savebutton = document.getElementById("save-button");
let input_bar = document.getElementById("input-bar-id");

input_bar.addEventListener("keyup",()=> {
    let inputtext = input_bar.value;


    if (inputtext.length == 0){
        if (savebutton.classList.contains("disabled")) return;
        savebutton.classList.add('disabled');
    }
    else if (savebutton.classList.contains("disabled")) {
        savebutton.classList.remove("disabled")
    }
})


savebutton.addEventListener("click", ()=> {
    let todotext = input_bar.value;
    if(todotext.length==0){
        return;
    }
    addtodo(todotext);
    todotext.value='';

})

let todoDataSection = document.getElementById('todo-data');
function addtodo(todoData) {
    let rowDiv= document.createElement('div')
    let todoItem= document.createElement('div')
    let todoNumber = document.createElement('div')
    let todoDetail = document.createElement('div')
    let todoStatus = document.createElement('div')
    let todoActions = document.createElement('div')
    let deleteButton = document.createElement('button')
    let finishedButton = document.createElement('button')
    let hr=  document.createElement('hr');

    // Adding classes
    rowDiv.classList.add('row')
    todoItem.classList.add("todo-item", "d-flex","flex-row","justify-content-between", "align-items-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail","text-muted")
    todoStatus.classList.add("todo-detail","text-muted")
    todoActions.classList.add("todo-actions","d-flex","justify-content-start","gap-2");
    deleteButton.classList.add("btn","btn-danger");
    finishedButton.classList.add("btn", "btn-success");


    todoNumber.textContent = "1";
    todoDetail.textContent = todoData; // sets the todo text sent from input element
    todoStatus.textContent = "In Progress"
    deleteButton.textContent = "Delete"
    finishedButton.textContent = "Finished"

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);


    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);
    todoDataSection.appendChild(rowDiv);
}



































// Events are happen in system, system tell you about it and your code will react to them ( A Specific action or interaction)

// example : User clicks the button on webpage , Browser trigger the event and you can add some handler (A Custom code excuted) for it

// when event happen the system (DOM) will fire a signal that some event Occurred and once you received  . Events handled by browser(Runtime) only
// All are Async properties , events are fired in browser window, attach to specific html or group of html element

// event is Click, resize window , video play pause , keypress , form submission


// lets add an event - html element 
let getTodosButton = document.getElementById('get-todos');

// Lets target HTML element- registration of event listeners (click/mouseover/mouseout is event name - check mdn docs for more event names)
getTodosButton.addEventListener("click",() => {
    // Button fire an event, feature give by runtime are not immediately executed , callback is not immediately executed
    // callback go inside a callback Queue and wait till all js code in main thread executed and call stack is empty then this code executed
    console.log("Clicked");
})

// Shorthand to write eventlisteners element.onclick
getTodosButton.onclick = () => {
    console.log("Clicked shorthand");
}



console.log("Welcome Here")