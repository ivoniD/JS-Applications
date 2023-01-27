window.addEventListener("load", () => {
  
  const form = document.querySelector(".form-inline");
  const input = document.querySelector(".form-control");
  const displayAllTasksDiv = document.querySelector(".table");
  const errorMessage = document.querySelector('.errorMessage');
  console.log(localStorage)


  displayTasks();
  
  form.addEventListener("submit", (e) => {
    errorMessage.style.display = "none";
    e.preventDefault();
    let newTask = input.value;
    if (!newTask) {
      errorMessage.style.display = "block";
      errorMessage.innerText = "Missing task name!"; 
      // alert("Missing task name");
      return;
    }
    if (newTask.length > 50) {
      errorMessage.style.display = "block";
      errorMessage.innerText = "Too large task name! It should be less than 50 characters."; 
      // alert("Too large task name. It should be less than 50 characters.");
      //input.value = "";
      return;
    }
    let taskKey = Date.now();
    localStorage.setItem(taskKey, newTask);
    input.value = "";
  
    displayTasks();
  });
  });
  
  
  
  function editTask(e) {
    let input = e.target.parentNode.querySelector(".text");
    let taskKey = e.target.parentNode.parentNode.getAttribute("data-task-key");
    localStorage.setItem(taskKey, input.value);
    if (e.target.innerText.toLowerCase() == "edit") {
      console.log(e.target);
      let input = e.target.parentNode.querySelector(".text");
      input.removeAttribute("readonly");
      input.focus();
      e.target.innerText = "Save";
      input.style.color = "red";
      input.style.backgroundImage = "-webkit-linear-gradient(top, white, white)";
    } else {
      let input = e.target.parentNode.querySelector(".text");
      input.setAttribute("readonly", "readonly");
      input.style.backgroundImage =
        "-webkit-linear-gradient(top, #3a0035, #3a0035)";
      input.style.color = "white";
      e.target.innerText = "Edit";
    }
  };
  
  function deleteTask(e) {
    let taskKey = e.target.parentNode.parentNode.getAttribute("data-task-key");
    localStorage.removeItem(taskKey);
    let displayAllTasksDiv = document.querySelector(".table");
    let elementToDelete = e.target.parentNode.parentNode;
    console.log(elementToDelete);
    displayAllTasksDiv.removeChild(elementToDelete);
  };
  
  
  function displayTasks(){
    let displayAllTasksDiv = document.querySelector(".table");
    displayAllTasksDiv.innerHTML = "";
  
    for (let i = 0; i < localStorage.length; i++) {
      let taskKey = localStorage.key(i);
      let taskName = localStorage.getItem(taskKey);
      console.log(taskKey);
      console.log(taskName);
      let taskEl = document.createElement("div");
      let contentEl = document.createElement("div");
      let delBtnEl = document.createElement("button");
      delBtnEl.setAttribute("onclick", "deleteTask(event)");
      delBtnEl.classList.add("push_button");
      delBtnEl.classList.add("red");
      delBtnEl.innerText = "Delete";
      let editBtnEl = document.createElement("button");
      editBtnEl.setAttribute("onclick", "editTask(event)");
      editBtnEl.classList.add("push_button");
      editBtnEl.classList.add("blue");
      editBtnEl.innerText = "Edit";
      let inputBtnEl = document.createElement("input");
      inputBtnEl.classList.add("text");
      inputBtnEl.setAttribute("type", "text");
      inputBtnEl.style.backgroundColor ="#3a0035";
      inputBtnEl.style.color = "white";
      inputBtnEl.setAttribute("readonly", "readonly");
      inputBtnEl.value = taskName;
  
      contentEl.appendChild(inputBtnEl);
      contentEl.appendChild(editBtnEl);
      contentEl.appendChild(delBtnEl);
      taskEl.appendChild(contentEl);

      taskEl.setAttribute("data-task-key", taskKey);
      // document.querySelector(".allDone").style.display = "none";
      displayAllTasksDiv.appendChild(taskEl);
  
    }
    
  };