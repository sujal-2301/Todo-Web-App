console.log("testing");
addTaskButton = document.getElementById("add-task");
input = document.getElementById("input");

addTaskButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("e.value", input.value);
});
