function toggleTheme(theme) {
  const body = document.body;

  if (theme === "dark") {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
  } else {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
  }
}

const input = document.getElementById("task-input");
const div = document.getElementById("todo-list");

const todos = [
  {
    title: "Shopping",
    isDone: false,
    createDate: new Date(),
  },
  {
    title: "Cleaning",
    isDone: false,
    createDate: new Date(),
  },
];

function newTask() {
  if (input.value === "") {
    alert("You must write something!");
    return;
  }

  const task = {
    title: input.value,
    isDone: false,
    createDate: new Date(),
  };

  todos.push(task);

  const html = `
    <li class="todo">
      <span class="todo__item">${task.title}</span>
      <span class="todo__date">(${task.createDate})</span>
      <button class="todo__check-btn"><i class="fas fa-check"></i></button>
      <button class="todo__delete-btn"><i class="fas fa-trash"></i></button>
    </li>
  `;

  div.innerHTML += html;

  input.value = "";
}
