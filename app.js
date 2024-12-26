const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;/* text that we will be typing in the box as input which is li*/
        listContainer.appendChild(li);/*li will be displayed under list container,hence appended to the container*/
        
        let span = document.createElement("span");/* to create a cross element,delete button*/
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""/*after we type and then click on add button the item is added but to clear that item from the add your text box and display as ,add your text*/
    saveData();/* hence when a task is added savedata func will be called to save the updated data */
}


listContainer.addEventListener("click", function (e) { /* so when clicked in the container where all tasks are stored*/
    if(e.target.tagName === "LI") { /* checks where we've clciked if clicked on li then*/
        e.target.classList.toggle("checked");/* then it should add the checked class name, and if checked class already there then itll remove that cause weve added classList.toggle*/
        saveData();/*Save updated state*/
    }
    else if(e.target.tagName === "SPAN") { /* if the clicked target element is SPAN then,*/
        e.target.parentElement.remove(); /* it will delete the parent element as parent will be the li it will remove the li element*/
        saveData();
    }
}, false);

function saveData() { /* creating a function such that when page is refreshed we dont lose the data or list */
    localStorage.setItem("data",listContainer.innerHTML);/* setItem name as data, whatever value that is inside the list container will be stored in the website*/
}

function showTask(){ /*display thius data whenever we open the browser again*/
    listContainer.innerHTML = localStorage.getItem("data");/*get item helps to get the content stored in the browser*/
}

showTask();