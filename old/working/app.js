function editTask(e) {

  if (e.target.innerText.toLowerCase() == "edit") {
    console.log(e.target);
    let input = e.target.parentNode.querySelector(".text");
    input.removeAttribute("readonly");
    input.focus();
    e.target.innerText = "Save";
  } else {
    let input = e.target.parentNode.querySelector(".text");
    input.setAttribute("readonly", "readonly");
    e.target.innerText = "Edit";
  }
}

function deleteTask(e) {
  let displayAllTasksDiv = document.querySelector(".table");
  let elementToDelete = e.target.parentNode.parentNode;
  console.log(elementToDelete);
  displayAllTasksDiv.removeChild(elementToDelete);
}

window.addEventListener("load", () => {
  let form = document.querySelector(".form-inline");
  let input = document.querySelector(".form-control");
  let displayAllTasksDiv = document.querySelector(".table");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask = input.value;
    if (!newTask) {
      alert("Missing task name");
      return;
    }
    if (newTask.length > 27) {
      alert("Too large task name. It should be less than 27 characters.");
      input.value = "";
      return;
    }
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
    inputBtnEl.setAttribute("readonly", "readonly");
    inputBtnEl.value = newTask;
    // contentEl.innerHTML = `<button class="push_button red" onclick="deleteTask(e)" >Done</button>  <input class="text" type="text" readonly="readonly" value="${newTask}"/>
    // <button class="push_button blue" onclick="editTask(e)">Edit</button> `;
    contentEl.appendChild(delBtnEl);
    contentEl.appendChild(inputBtnEl);
    contentEl.appendChild(editBtnEl);

    taskEl.appendChild(contentEl);
    document.querySelector(".allDone").style.display = "none";
    displayAllTasksDiv.appendChild(taskEl);
    input.value = "";
  });
});

