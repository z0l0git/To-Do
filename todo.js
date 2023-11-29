const todo = document.getElementById("todo");
const inprog = document.getElementById("inprog");
const stuck = document.getElementById("stuck");
const done = document.getElementById("done");

const drag = document.getElementById("demcon");

const inputBox = document.getElementById("inputBox");

const addbtn = document.getElementById("addbtn");

const addInput = document.getElementById("input");

let middle = 1;
const element = inprog.children[middle];

// function insertBefore(newEl, exEl) {
//   const inprog = exEl.inprogElement;
// }

drag.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("box", event.target.id);
});

todo.addEventListener("dragover", (event) => {
  event.preventDefault();
});

todo.addEventListener("drop", (event) => {
  event.preventDefault();
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  //   inprog.parentNode.insertBefore(dragItem, inprog.nextSibling);
  todo.appendChild(dragItem);
});

inprog.addEventListener("dragover", (event) => {
  event.preventDefault();
});

inprog.addEventListener("drop", (event) => {
  event.preventDefault();
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);

  inprog.insertBefore(dragItem, element);
  middle++;
  console.log(middle);
  //   inprog.appendChild(dragItem);
});
