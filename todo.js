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

const deletecon = document.querySelectorAll(".delete");

const addInput = document.getElementById("input");

const addCard = document.getElementById("addCard");

let states = [];

states = JSON.parse(localStorage.getItem("ITEM"));
const inputObj = {};

// const drag = document.querySelectorAll(".innerCard");
// drag.forEach((el) => {
//   el.addEventListener("dragstart", (event) => {
//     event.dataTransfer.setData("box", event.target.id);
//   });
// });

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

const drag = document.querySelectorAll(".innerCard");

drag.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("box", event.target.id);
  });
});

todo.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  targetTodo.appendChild(dragItem);
});

inprog.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  // console.log(dragId);
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
  Cstatus.value = "To Do";
  console.log(Cstatus.value);
});
addbtnProg.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "In Progress";
  console.log(Cstatus.value);
});
addbtnStuck.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "Stuck";
  console.log(Cstatus.value);
});
addbtnDone.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "Done";
  console.log(Cstatus.value);
});

window.onclick = function (event) {
  if (event.target == addInput) {
    addInput.style.display = "none";
  }
};

function addNewInnerCard(parentDiv) {
  // count++;
  // const demcon = document.createElement("div");
  // demcon.draggable = true;
  // demcon.id = `demcon${count}`;
  // demcon.classList.add("innerCard");
  // demcon.setAttribute("class", "innerCard");
  // const check = document.createElement("div");
  // demcon.appendChild(check);

  // const roundCheck = document.createElement("i");
  // roundCheck.setAttribute("class", "fa-regular fa-circle-check fa-xl");
  // roundCheck.style.color = "black";
  // check.appendChild(roundCheck);

  // const cardContent = document.createElement("div");
  // cardContent.classList.add("cardContent");
  // demcon.appendChild(cardContent);
  // const cardTitle = document.createElement("h2");
  // cardTitle.classList.add("cardTitle");
  // cardTitle.innerHTML = titleInput.value;

  // const cardDesc = document.createElement("p");
  // cardDesc.classList.add("cardDesc");
  // cardDesc.innerHTML = descInput.value;
  // const cardPrior = document.createElement("p");
  // cardPrior.classList.add("cardPrior");
  // cardPrior.innerHTML = "Mid";
  // cardContent.appendChild(cardTitle);
  // cardContent.appendChild(cardDesc);
  // cardContent.appendChild(cardPrior);

  // const icons = document.createElement("div");
  // icons.classList.add("icons");
  // demcon.appendChild(icons);
  // const deleted = document.createElement("div");

  // deleted.setAttribute("class", "delete icon");
  // deleted.setAttribute("onclick", "deleteCon()");
  // icons.appendChild(deleted);

  // const deleteicon = document.createElement("i");
  // deleteicon.setAttribute("class", "fa-solid fa-x fa-2xs");
  // deleteicon.setAttribute("onclick", "deleteCon()");
  // deleteicon.style.color = "black";
  // deleted.appendChild(deleteicon);

  // const edit = document.createElement("div");
  // edit.setAttribute("class", "edit icon");
  // const editicon = document.createElement("i");
  // editicon.setAttribute("class", "fa-regular fa-pen-to-square fa-sm");
  // editicon.style.color = "black";
  // edit.appendChild(editicon);
  // icons.appendChild(edit);

  // parentDiv.appendChild(demcon);

  inputObj.status = Cstatus.value;
  inputObj.priority = prior.value;
  states.push({ ...inputObj });
  console.log(inputObj);
  console.log(states);

  localStorage.setItem("ITEM", JSON.stringify(states));

  addInput.style.display = "none";
}

titleInput.addEventListener("change", (event) => {
  inputObj.title = titleInput.value;
});
descInput.addEventListener("change", (event) => {
  inputObj.desc = descInput.value;
});

addCard.addEventListener("click", () => {
  if (Cstatus.value === "To Do") {
    addNewInnerCard(targetTodo);
  } else if (Cstatus.value === "In Progress") {
    addNewInnerCard(targetProg);
  } else if (Cstatus.value === "Stuck") {
    addNewInnerCard(targetStuck);
  } else if (Cstatus.value === "Done") {
    addNewInnerCard(targetDone);
  }
});

function deleteCon() {
  const deletecon = document.querySelectorAll(".delete");
  console.log("hello");
  deletecon.forEach((el) => {
    el.addEventListener("click", () => {
      console.log(el.parentElement.parentElement);
      el.parentElement.parentElement.style.display = "none";
    });
  });
}

let count = 0;
let style = "";

const card = (props) => {
  count++;
  let color = "regular";
  const { title, desc, status, priority } = props;
  if (status === "Done") {
    color = "solid";
  }

  return `<div id="demcon${count}" class="innerCard" draggable="true">
  <div class="check">
    <h1 class="${style}">✓</h1>
  </div>
  <div class="cardContent">
    <h2 class="cardTitle">${title}</h2>
    <p class="cardDesc">
    ${desc}
    </p>
    <p class="cardPrior">${priority}</p>
  </div>
  <div class="icons">
    <div class="delete icon" id="deletecon">
      <i class="fa-solid fa-x fa-2xs" style="color: #000000"></i>
    </div>
    <div class="edit icon">
      <i
        class="fa-regular fa-pen-to-square fa-sm"
        style="color: #000000"
      ></i>
    </div>
  </div>
</div>`;
};

addCard.addEventListener("click", () => {
  render();
});

const render = () => {
  if (states[states.length - 1]["status"] === "To Do") {
    targetTodo.innerHTML += card(states[states.length - 1]);
  } else if (states[states.length - 1]["status"] === "In Progress") {
    targetProg.innerHTML += card(states[states.length - 1]);
  } else if (states[states.length - 1]["status"] === "Stuck") {
    targetStuck.innerHTML += card(states[states.length - 1]);
  } else if (states[states.length - 1]["status"] === "Done") {
    style = "styles";
    targetDone.innerHTML += card(states[states.length - 1]);
  }
  const drag = document.querySelectorAll(".innerCard");

  drag.forEach((el) => {
    el.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("box", event.target.id);
    });
  });

  style = "";
  console.log(style, "aa");
};

render();
console.log(states);
