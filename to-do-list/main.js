let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksdiv = document.querySelector(".tasks");

let arrayoftask = [];

if(localStorage.getItem("tasks")){
    arrayoftask = JSON.parse(localStorage.getItem("tasks"));
}

getdatalocalstorage();

tasksdiv.addEventListener("click", (d) =>{
    if(d.target.classList.contains("del")){
        const taskElement = d.target.parentElement;
        taskElement.classList.add("fade-out");
        const taskId = taskElement.getAttribute("data-id");
        setTimeout(() => {
            deletetask(taskId);
            taskElement.remove();
        }, 500);
    }

    if(d.target.classList.contains("task")){
        taskcompleted(d.target.getAttribute("data-id"));
        d.target.classList.toggle("task-done");
    }


})


submit.onclick = function () {
  if (input.value !== "") {
    addtasktoarray(input.value);
    input.value = "";
  }
};

function addtasktoarray(tasktext) {
  const task = {
    id: Date.now(),
    title: tasktext,
    completed: false,
  };

  arrayoftask.push(task);

  addElementstopage(arrayoftask);
  adddatalocalstorage(arrayoftask);
}

function addElementstopage(arrayoftask){
    tasksdiv.innerHTML = "";
    arrayoftask.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        
        if(task.completed === true){
            div.className = "task-done";
        }

        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("delete"));
        div.appendChild(span);
        
        tasksdiv.appendChild(div);
    });
}

function adddatalocalstorage(arrayoftask){
    window.localStorage.setItem("tasks", JSON.stringify(arrayoftask));
}
function getdatalocalstorage(arrayoftask){
    let data = window.localStorage.getItem("tasks");
    if(data){
        let tasks = JSON.parse(data);
        addElementstopage(tasks);
    }
}

function deletetask(taskid){
   arrayoftask = arrayoftask.filter((task) => task.id != taskid);
   adddatalocalstorage(arrayoftask);
}

function taskcompleted(taskid){
   for(let i=0 ; i<arrayoftask.length ; i++){
    if(arrayoftask[i].id == taskid){
        arrayoftask[i].completed == false ? (arrayoftask[i].completed = true) : (arrayoftask[i].completed = false);
    }
   }
   adddatalocalstorage(arrayoftask);
}