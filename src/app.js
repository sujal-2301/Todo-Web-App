console.log("testing");
addTaskButton = document.getElementById("add-task");
input = document.getElementById("input");
taskText = document.getElementById("task-text");
tasks = [];

//handle the click event on the add task button
addTaskButton.addEventListener("click", function (e) {
  e.preventDefault();
  taskText.innerHTML = input.value;
  console.log("e.value", input.value);
  input.value = "";
});

//delete task button event handling
deleteTaskButton = document.getElementById("delete-button");

deleteTaskButton.addEventListener("click", function (e) {});
