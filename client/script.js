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
        deleteBtn.textContent="Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.href="#";
        li.appendChild(span);
        li.appendChild(deleteBtn);
        tasklist.appendChild(li);
    }
    inputField.value="";
}