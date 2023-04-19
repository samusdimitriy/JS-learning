// import { save, load } from "./storage.js";

// save("myKey", "myValue");
// load("myKey");

// const myInput = document.getElementById("myInput");
// const myUl = document.getElementById("myUl");

// let currentId = 0;

// function addNewTask() {
//   const task = myInput.value.trim();
//   myInput.value = "";
//   if (task === "") {
//     alert("Please enter a task");
//     return;
//   }
//   createLi(task);
//   addTaskToStorage(task);
// }

// function addCloseBtn(target) {
//   const span = document.createElement("span");
//   const text = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(text);
//   target.appendChild(span);
// }

// function createLi(text, isDone = false, id = currentId) {
//   const liEl = document.createElement("li");
//   liEl.textContent = text;
//   liEl.dataset.id = id;
//   if (isDone) {
//     liEl.classList.add("checked");
//   }
//   myUl.appendChild(liEl);
//   addCloseBtn(liEl);
// }

// function handleTaskBehaviour({ target }) {
//   console.log(target);
//   const currentState = load(STORAGE_KEY);
//   if (target.tagName === "LI") {
//     target.classList.toggle("checked");
//     const taskIndex = currentState.findIndex(
//       (task) => task.id === Number(target.dataset.id)
//     );
//     currentState[taskIndex].isDone = !currentState[taskIndex].isDone;
//     save(STORAGE_KEY, currentState);
//   } else if (target.classList.contains("close")) {
//     target.parentElement.remove();
//     const taskIndex = currentState.findIndex(
//       (task) => task.id === Number(target.parentElement.dataset.id)
//     );
//     currentState.splice(taskIndex, 1);
//     save(STORAGE_KEY, currentState);
//   }
// }

// function createTaskObj(text, isDone) {
//   return {
//     text,
//     isDone,
//     id: currentId,
//   };
// }

// const STORAGE_KEY = "tasks";

// function addTaskToStorage(text, isDone = false) {
//   const currentState = load(STORAGE_KEY);
//   if (currentState === undefined) {
//     const taskObj = [createTaskObj(text, isDone)];
//     save(STORAGE_KEY, taskObj);
//   } else {
//     const taskObj = createTaskObj(text, isDone);
//     currentState.push(taskObj);
//     save(STORAGE_KEY, currentState);
//     console.log(currentState);
//   }
//   currentId++;
// }

// function fillTasksList() {
//   const currentState = load(STORAGE_KEY);
//   if (currentState === undefined) {
//     return;
//   }
//   currentState.forEach(({ text, isDone, id }) => {
//     createLi(text, isDone, id);
//     currentId = id + 1;
//   });
// }

// export { addNewTask, handleTaskBehaviour, fillTasksList };
