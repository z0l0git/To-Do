const todo = document.getElementById("todo");
const inprog = document.getElementById("inprog");
const stuck = document.getElementById("stuck");
const done = document.getElementById("done");

const targetTodo = document.getElementById("targetTodo");
const targetProg = document.getElementById("targetProg");
const targetStuck = document.getElementById("targetStuck");
const targetDone = document.getElementById("targetDone");

const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const Cstatus = document.getElementById("status");
const prior = document.getElementById("prior");

const addbtntodo = document.getElementById("addbtnTodo");
const addbtnProg = document.getElementById("addbtnProg");
const addbtnStuck = document.getElementById("addbtnStuck");
const addbtnDone = document.getElementById("addbtnDone");

const addInput = document.getElementById("input");

const addCard = document.getElementById("addCard");

const drag = document.querySelectorAll(".innerCard");

drag.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("box", event.target.id);
  });
});

inprog.addEventListener("dragover", (event) => {
  event.preventDefault();
});

todo.addEventListener("dragover", (event) => {
  event.preventDefault();
});

stuck.addEventListener("dragover", (event) => {
  event.preventDefault();
});
done.addEventListener("dragover", (event) => {
  event.preventDefault();
});

todo.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  targetTodo.appendChild(dragItem);
});

inprog.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  targetProg.appendChild(dragItem);
});

stuck.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  targetStuck.appendChild(dragItem);
});

done.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  targetDone.appendChild(dragItem);
});

addbtntodo.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "1";
  console.log(Cstatus.value);
});
addbtnProg.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "2";
  console.log(Cstatus.value);
});
addbtnStuck.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "3";
  console.log(Cstatus.value);
});
addbtnDone.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "4";
  console.log(Cstatus.value);
});

window.onclick = function (event) {
  if (event.target == addInput) {
    addInput.style.display = "none";
  }
};
let count = 0;

function addNewInnerCard(parentDiv) {
  count++;
  const demcon = document.createElement("div");
  demcon.draggable = true;
  demcon.id = `demcon${count}`;
  demcon.classList.add("innerCard");
  demcon.setAttribute("class", "innerCard");
  const check = document.createElement("div");
  demcon.appendChild(check);

  const roundCheck = document.createElement("i");
  roundCheck.setAttribute("class", "fa-regular fa-circle-check fa-xl");
  roundCheck.style.color = "black";
  check.appendChild(roundCheck);

  const cardContent = document.createElement("div");
  cardContent.classList.add("cardContent");
  demcon.appendChild(cardContent);
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("cardTitle");
  cardTitle.innerHTML = titleInput.value;

  const cardDesc = document.createElement("p");
  cardDesc.classList.add("cardDesc");
  cardDesc.innerHTML = descInput.value;
  const cardPrior = document.createElement("p");
  cardPrior.classList.add("cardPrior");
  cardPrior.innerHTML = "Mid";
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDesc);
  cardContent.appendChild(cardPrior);

  const icons = document.createElement("div");
  icons.classList.add("icons");
  demcon.appendChild(icons);
  const deleted = document.createElement("div");
  deleted.setAttribute("class", "delete icon");
  icons.appendChild(deleted);

  const deleteicon = document.createElement("i");
  deleteicon.setAttribute("class", "fa-solid fa-x fa-2xs");
  deleteicon.style.color = "black";
  deleted.appendChild(deleteicon);

  const edit = document.createElement("div");
  edit.setAttribute("class", "edit icon");
  const editicon = document.createElement("i");
  editicon.setAttribute("class", "fa-regular fa-pen-to-square fa-sm");
  editicon.style.color = "black";
  edit.appendChild(editicon);
  icons.appendChild(edit);

  parentDiv.appendChild(demcon);
}

addCard.addEventListener("click", () => {
  if (Cstatus.value === "1") {
    addNewInnerCard(targetTodo);
  } else if (Cstatus.value === "2") {
    addNewInnerCard(targetProg);
  } else if (Cstatus.value === "3") {
    addNewInnerCard(targetStuck);
  } else if (Cstatus.value === "4") {
    addNewInnerCard(targetDone);
  }
});
