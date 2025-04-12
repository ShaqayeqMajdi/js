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
const ul = document.getElementById("todo-list");

const todos = [
  {
    title: "Shopping",
    isDone: false,
    createDate: "4/6/2025, 10:33:00 PM",
  },
  {
    title: "Cleaning",
    isDone: false,
    createDate: "8/6/2025, 11:23:00 PM",
  },
];

function newTask() {
  if (input.value === "") {
    alert("You must write something!");
    return;
  }

  const inputValue = input.value;

  const task = {
    title: inputValue,
    isDone: false,
    createDate: new Date(),
  };

  todos.push(task);

  render();
}

function render() {
  let html = "";

  for (let i = 0; i < todos.length; i++) {
    html += `
        <li class="todo">
        <span class="todo__item">${todos[i].title}</span>
        <span class="todo__date">${todos[i].createDate}</span>
         <button class="todo__check-btn"><i class="fas fa-check"></i></button>
        <button class="todo__delete-btn"><i class="fas fa-trash"></i></button>
        </li>
        `;
  }
  ul.innerHTML = html;
  input.value = "";
}
