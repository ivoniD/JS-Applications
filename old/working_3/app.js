window.addEventListener("load", () => {
const form = document.querySelector(".form-inline");
const input = document.querySelector(".form-control");
const displayAllTasksDiv = document.querySelector(".table");
console.log(form)
console.log(input)

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
  contentEl.appendChild(inputBtnEl);
  contentEl.appendChild(editBtnEl);
  contentEl.appendChild(delBtnEl);

  taskEl.appendChild(contentEl);
  // document.querySelector(".allDone").style.display = "none";
  displayAllTasksDiv.appendChild(taskEl);
  input.value = "";
});
})

function editTask(e) {
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
      "-webkit-linear-gradient(top, #72082d, #9b1d4a)";
    input.style.color = "white";
    e.target.innerText = "Edit";
  }
}

function deleteTask(e) {
  let displayAllTasksDiv = document.querySelector(".table");
  let elementToDelete = e.target.parentNode.parentNode;
  console.log(elementToDelete);
  displayAllTasksDiv.removeChild(elementToDelete);
}
