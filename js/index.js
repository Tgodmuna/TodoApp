const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const todoText = input.value.trim();
  if (todoText !== "") {
    const todo = document.createElement("li");
    const todoLabel = document.createElement("label");
    const todoCheckbox = document.createElement("input");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    todoCheckbox.type = "checkbox";
    todoLabel.textContent = todoText;
    todoLabel.appendChild(todoCheckbox);
    todo.appendChild(todoLabel);
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    todo.appendChild(editBtn);
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    todo.appendChild(deleteBtn);
    todoList.appendChild(todo);
    input.value = "";
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    const todo = event.target.closest("li");
    todo.classList.toggle("completed");
  } else if (event.target.classList.contains("edit-btn")) {
    const todo = event.target.closest("li");
    const todoLabel = todo.querySelector("label");
    const todoInput = document.createElement("input");
    todoInput.type = "text";
    todoInput.value = todoLabel.textContent;
    todoLabel.textContent = "";
    todoLabel.appendChild(todoInput);
    event.target.textContent = "Save";
    event.target.classList.remove("edit-btn");
    event.target.classList.add("save-btn");
  } else if (event.target.classList.contains("save-btn")) {
    const todo = event.target.closest("li");
    const todoLabel = todo.querySelector("label");
    const todoInput = todo.querySelector('input[type="text"]');
    todoLabel.textContent = todoInput.value;
    event.target.textContent = "Edit";
    event.target.classList.remove("save-btn");
    event.target.classList.add("edit-btn");
  } else if (event.target.classList.contains("delete-btn")) {
    const todo = event.target.closest("li");
    todo.remove();
  }
});
