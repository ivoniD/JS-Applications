window.addEventListener("load", () => {})
  
  const input = document.querySelector(".form-control");
  console.log(localStorage)

  document.querySelector(".form-inline").addEventListener("submit", (e) => {
    e.preventDefault();

    let value = input.value;
    let key = Date.now();

    localStorage.setItem(key, value);
    console.log(localStorage)
  });



  function editTask(e) {
    let input = e.target.parentNode.querySelector(".text");
    let key = e.target.parentNode.parentNode.getAttribute("data-task-key");
    localStorage.setItem(key, input.value);
    console.log(localStorage)
  };


  function deleteTask(e) {
    let key = e.target.parentNode.parentNode.getAttribute("data-task-key");
    localStorage.removeItem(key);
    console.log(localStorage)
    
  };
  

  function displayTasks(){
    let displayAllTasksDiv = document.querySelector(".table");
    displayAllTasksDiv.innerHTML = "";
  
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let name = localStorage.getItem(key);
      console.log(key);
      console.log(name);
      inputBtnEl.value = name;
      taskEl.setAttribute("data-task-key", key);
    }
    
  };