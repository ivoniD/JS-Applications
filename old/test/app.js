window.addEventListener("load", () => {
const form = document.querySelector(".form-inline");
const input = document.querySelector(".form-control");
const displayAllTasksDiv = document.querySelector(".table");
showData()
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask = input.value;
  
    if (!newTask) {
      alert("Missing task name");
      return;
    }
    if (newTask.length > 50) {
      alert("Too large task name. It should be less than 50 characters.");
      //input.value = "";
      return;
    }

  
    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.push(newTask);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    input.value = "";


 
  let taskEl = document.createElement("div");
  let contentEl = document.createElement("div");
  let delBtnEl = document.createElement("button");
  delBtnEl.setAttribute("onclick", "deleteTask(event)");
  delBtnEl.classList.add("push_button");
  delBtnEl.classList.add("red");
  delBtnEl.classList.add("btn");
  delBtnEl.innerText = "Done";
  let editBtnEl = document.createElement("button");
  editBtnEl.setAttribute("onclick", "editTask(event)");
  editBtnEl.classList.add("push_button");
  editBtnEl.classList.add("blue");
  editBtnEl.classList.add("btn");
  editBtnEl.innerText = "Edit";
  let inputBtnEl = document.createElement("input");
  inputBtnEl.classList.add("text");
  inputBtnEl.classList.add("container");
  inputBtnEl.setAttribute("type", "text");
  inputBtnEl.setAttribute("readonly", "readonly");
  inputBtnEl.value = newTask;
  // contentEl.innerHTML = `<button class="push_button red" onclick="deleteTask(e)" >Done</button>  <input class="text" type="text" readonly="readonly" value="${newTask}"/>
  // <button class="push_button blue" keydown="editTask(e)">Edit</button> `;
  contentEl.appendChild(inputBtnEl);
  contentEl.appendChild(editBtnEl);
  contentEl.appendChild(delBtnEl);

  taskEl.appendChild(contentEl);
  // document.querySelector(".allDone").style.display = "none";
  displayAllTasksDiv.appendChild(taskEl);
  input.value = "";


})

})



function editTask(e) {
  if (e.target.innerText.toLowerCase() == "edit") {
    console.log(e.target);
    let input = e.target.parentNode.querySelector(".text");
    input.removeAttribute("readonly");
    input.focus();

    let editBtn = e.target.parentNode.querySelector(".blue")
    editBtn.style.color = "red";

    e.target.innerText = "Save";
    input.style.color = "red";
    input.style.cursor = "pointer";
    input.style.backgroundImage = "-webkit-linear-gradient(top, white, white)";
  } else {
    let input = e.target.parentNode.querySelector(".text");
    input.setAttribute("readonly", "readonly");
    input.style.backgroundImage =
       "-webkit-linear-gradient(top, #3a0035, #3a0035)";
    let editBtn = e.target.parentNode.querySelector(".blue")
    editBtn.style.color = "black";  
    input.style.color = "white";
    input.style.cursor = "auto";
    e.target.innerText = "Edit";
  }
}

function deleteTask(e) {
  let displayAllTasksDiv = document.querySelector(".table");
  let elementToDelete = e.target.parentNode.parentNode;
  console.log(elementToDelete);
  displayAllTasksDiv.removeChild(elementToDelete);
}


function showData(){
  const displayAllTasksDiv = document.querySelector(".table");
  let taskList;
  if(localStorage.getItem("taskList") === null){
    taskList = [];
  }else{
    taskList = JSON.parse(localStorage.getItem("taskList"))
  }
  console.log(taskList);
  let html = '';
  
  taskList.forEach(function (t, i) {
   html +=  `
  <div>
   <div>
     <input class ="text container" type="text" readonly="readonly"><div>${t}</div></input>
     <button onClick="editTask(${i})" class="push_button blue btn">Edit</button>
     <button onClick="deleteTask(${i})" class="push_button blue btn">Done</button>
   </div>
  </div>
  `
  displayAllTasksDiv.innerHTML = html;
  })
  console.log(html);
 
}

