// adding a events inside DOM
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