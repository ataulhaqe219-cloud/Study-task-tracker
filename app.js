let form = document.querySelectorAll(".form-group");
let darkBtn = document.querySelector("#dark-btn");
let main = document.querySelector(".main");
let taskForm = document.querySelector(".task-form");
let addBtn = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let yourTask = document.querySelector(".task");

let colours = ["#f3cfbe", "#b8e2f4", "#ffedca", "#e5f9d1", "#f7d1d8", "#e5d3b3", "#e7ddff"];
let i = 0;
let fontColor = ["red","blue","#e6b400","green","#ff7aa2","brown","purple"];
let j = 0   

darkBtn. addEventListener("click",function(){
    document.body.classList.toggle("dark");
});

addBtn.addEventListener("click",
    function(){
    let subject = document.querySelector("#subject").value;
    let priority = document.querySelector("#priority").value;
    let deadline = document.querySelector("#deadline").value;
    let task = document.querySelector("#taskName").value;
    
     if(task === "" || subject === "" || priority === "" || deadline === ""){
        msg.style.display = "block";
        setTimeout(function(){
            msg.style.display = "none";
        }, 2000);
        return;
    }
    createTask(task, subject, priority, deadline);
    counts();
    document.querySelector("#subject").value = "";
    document.querySelector("#priority").selectedIndex = 0;
    document.querySelector("#deadline").value = "";
    document.querySelector("#taskName").value = ""; 
});


const createTask = (task, subject, priority,deadline) => {
    const priorityClass = getPriorityClass(priority);
    let newTask = document.createElement("div");
    newTask.innerHTML = 
    `<input type = "checkbox" class = "checkbox">
    <div>
        <h3>${task}</h3>
        <p class="subject">${subject}</p>
    </div>
    <div>
        <p>Priority : <span class = "${priorityClass}">${priority}</span></p>
        <p>Deadline : ${deadline}</p>
    </div>
    <div id="buttons">
        <button class="completeBtn">Mark Complete</button>
        <button class="deleteBtn">🗑️ Delete</button>
    </div>`;
    yourTask.appendChild(newTask);
    newTask.classList.add("taskCard");
    let completeBtn = newTask.querySelector(".completeBtn");
let checkbox = newTask.querySelector(".checkbox");
checkbox.addEventListener("click",
    function(e){
        e.preventDefault();
    });
completeBtn.addEventListener("click",
    function(){
        checkbox.checked = true;
        completeBtn.textContent = "Completed";
        completeBtn.style.color = "green";
        completeBtn.style.borderColor = "green";
        newTask.classList.add("completed");
        counts();
    });
    let deleteBtn = newTask.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click",
        function(){
            newTask.remove();
            counts();
        })
    let subjectBox = newTask.querySelector(".subject");
    subjectBox.style.backgroundColor = colours[i];
    i = (i+1)%colours.length;
    let textColor = newTask.querySelector(".subject");
    textColor.style.color = fontColor[j];
    j = (j+1)%fontColor.length;
}


const getPriorityClass = (priority) => {
    if(priority === "high"){
        return "high";        
    }
    else if(priority === "medium"){
        return "medium";
    }
    else{
        return "low";
    }
};

const counts = () => {
    let total = document.querySelectorAll(".taskCard").length;
    let complete = document.querySelectorAll(".taskCard > .checkbox:checked").length;
    let pending = total - complete;
    document.querySelector("#total").innerText = `Total ${total}`;
    document.querySelector("#complete").innerText = `Complete ${complete}`;
    document.querySelector("#pending").innerText = `Pending ${pending}`;
}
let today = new
Date().toISOString().split("T")[0];
document.querySelector("#deadline").
min = today;
counts();



