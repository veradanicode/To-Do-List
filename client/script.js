const inputField = document.getElementById("inputField");
const tasklist = document.getElementById("tasklist");

loadTasks();

function createTask(taskText){
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("a");
    deleteBtn.innerHTML = '<i class="fa fa-trash-o" style="font-size:18px;color:white"></i>';
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.href = "#";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    tasklist.appendChild(li);
}

function addTask(){
    if(inputField.value === ""){
        alert("Please enter a task");
    }
    else{
        createTask(inputField.value);
        saveTasks();
    }

    inputField.value = "";
}

// Delete task
tasklist.addEventListener('click', (event) => {
    const deleteBtn = event.target.closest('.deleteBtn');

    if (deleteBtn) {
        deleteBtn.parentElement.remove();
        saveTasks();
    }
});

function saveTasks(){
    let tasks = [];

    tasklist.querySelectorAll("li").forEach((task)=>{
        tasks.push(task.querySelector("span").textContent);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task);
    });
}
















