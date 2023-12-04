// Grab Elemets from HTM++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

// Declare Array and Object to put items in++++++++++++++++++++++++++++++++++++++++++++++++++++++

let states = [];

states =
  localStorage.getItem("ITEM") === null
    ? []
    : JSON.parse(localStorage.getItem("ITEM"));
const inputObj = {};

// const drag = document.querySelectorAll(".innerCard");
// drag.forEach((el) => {
//   el.addEventListener("dragstart", (event) => {
//     event.dataTransfer.setData("box", event.target.id);
//   });
// });

// Prevent default of target divs++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

// Saving Data of Draggable DIv++++++++++++++++++++++++++++++++++++++++++++++++++++++

const drag = document.querySelectorAll(".innerCard");

// drag.forEach((el) => {
//   el.addEventListener("dragstart", (event) => {
//     event.dataTransfer.setData("box", event.target.id);
//     console.log(event);
//   });
// });

// Adding drop events for target divs++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

// + Add Card button Events++++++++++++++++++++++++++++++++++++++++++++++++++++++

addbtntodo.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "To Do";
});
addbtnProg.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "In Progress";
});
addbtnStuck.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "Stuck";
});
addbtnDone.addEventListener("click", () => {
  addInput.style.display = "flex";
  Cstatus.value = "Done";
});

// Add input popup modal ++++++++++++++++++++++++++++++++++++++++++++++++++++++
window.onclick = function (event) {
  if (event.target == addInput) {
    addInput.style.display = "none";
  }
};

// adding items to object and array++++++++++++++++++++++++++++++++++++++++++++++++++++++
let count = 0;
function addNewInnerCard(parentDiv) {
  inputObj.status = Cstatus.value;
  inputObj.priority = prior.value;
  inputObj.id = count++;
  count = inputObj.id;
  states.push({ ...inputObj });
  localStorage.setItem("ITEM", JSON.stringify(states));
  addInput.style.display = "none";

  localStorage.setItem("count", count);
}

titleInput.addEventListener("change", (event) => {
  inputObj.title = titleInput.value;
});
descInput.addEventListener("change", (event) => {
  inputObj.desc = descInput.value;
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

let style = "";

const card = (props) => {
  let color = "regular";
  const { title, desc, status, priority, id } = props;
  if (status === "Done") {
    color = "solid";
  }

  return `<div id="demcon${id}" class="innerCard" draggable="true">
  <div class="check">
    <h1 class="${style}" style="font-family: 'Courier New', Courier, monospace;">✓</h1>
  </div>
  <div class="cardContent">
    <h2 class="cardTitle">${title}</h2>
    <p class="cardDesc">
    ${desc}
    </p>
    <p class="cardPrior">${priority}</p>
  </div>
  <div class="icons">
    <div class="delete icon" id="deletecon" onclick=deleteIcon()
    >
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
  let todo = "";
  let inprog = "";
  let stuckv = "";
  let donev = "";
  states.forEach((el) => {
    if (el["status"] === "To Do") {
      todo += card(el);
    } else if (el["status"] === "In Progress") {
      inprog += card(el);
    } else if (el["status"] === "Stuck") {
      stuckv += card(el);
    } else if (el["status"] === "Done") {
      style = "styles";
      donev += card(el);
    }
  });
  targetTodo.innerHTML = todo;
  targetProg.innerHTML = inprog;
  targetStuck.innerHTML = stuckv;
  targetDone.innerHTML = donev;

  const drag = document.querySelectorAll(".innerCard");

  drag.forEach((el) => {
    el.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("box", event.target.id);
      console.log(el.id);
    });
  });

  style = "";
};

function deleteIcon(id) {
  states.filter((item) => {
    return item.id !== id;
  });
  render();
}

render();
