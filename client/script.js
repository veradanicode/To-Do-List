const inputField=document.getElementById("inputField");
const tasklist=document.getElementById("tasklist");


function addTask(){
    if(inputField.value===""){
        alert("Please enter a task");
    }
    else{

        const li=document.createElement("li");
        const span=document.createElement("span");
        span.textContent=inputField.value;
        const deleteBtn=document.createElement("a");
        deleteBtn.innerHTML='<i class="fa fa-trash-o" style="font-size:18px;color:white"></i>';
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.href="#";
        li.appendChild(span);
        li.appendChild(deleteBtn);
        tasklist.appendChild(li);
        const progress=document.getElementById("task-list");
        progress.value=tasklist.children.length;
        progress.max=tasklist.children.length;

        
    }
    inputField.value="";
}

//Add click listener for delete button
document.getElementById('tasklist').addEventListener('click', (event) => {
    const deleteBtn=event.target.closest('.deleteBtn');
    if (deleteBtn) {
        deleteBtn.parentElement.remove();
    }
});


