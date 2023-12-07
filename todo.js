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

function statusChange(arr) {
  arr.forEach((el) => {});
}

function deleteIcon(id) {
  states.filter((id) => {
    return item.id !== id;
  });
  render();
}

todo.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  const result = states.find(({ id }) => id === dragId);
  result.status = "To Do";
  const responseFromLS = JSON.parse(localStorage.getItem("ITEM"));
  const newArr = responseFromLS.map((el) => {
    if (el.id === dragId) {
      return { ...el, status: "To Do" };
    }
    return el;
  });
  localStorage.setItem("ITEM", JSON.stringify(newArr));
  render();
});

inprog.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);

  const result = states.find(({ id }) => id === dragId);
  const responseFromLS = JSON.parse(localStorage.getItem("ITEM"));
  result.status = "In Progress";

  const newArr = responseFromLS.map((el) => {
    if (el.id === dragId) {
      return { ...el, status: "In Progress" };
    }
    return el;
  });
  localStorage.setItem("ITEM", JSON.stringify(newArr));

  render();
});

stuck.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  const result = states.find(({ id }) => id === dragId);
  result.status = "Stuck";
  const responseFromLS = JSON.parse(localStorage.getItem("ITEM"));
  const newArr = responseFromLS.map((el) => {
    if (el.id === dragId) {
      return { ...el, status: "Stuck" };
    }
    return el;
  });
  localStorage.setItem("ITEM", JSON.stringify(newArr));
  render();
});

done.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  const result = states.find(({ id }) => id === dragId);
  result.status = "Done";
  const responseFromLS = JSON.parse(localStorage.getItem("ITEM"));
  const newArr = responseFromLS.map((el) => {
    if (el.id === dragId) {
      return { ...el, status: "Done" };
    }
    return el;
  });
  localStorage.setItem("ITEM", JSON.stringify(newArr));
  render();
});

// + Add Card button Events++++++++++++++++++++++++++++++++++++++++++++++++++++++

function checkStatus(state, task) {
  if (task) {
    // check if task is not undefined
    if (state.id === "todo") {
      inputObj.status = "To Do";
    } else if (state.id === "inprog") {
      inputObj.status = "In Progess";
    } else if (state.id === "stuck") {
      inputObj.status = "Stuck";
    } else if (state.id === "done") {
      inputObj.status = "Done";
    }
  }
}

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
const uniqId = () => {
  const uniq = "id" + new Date().getTime();
  return uniq;
};

let count = 0;
localStorage.setItem("count", count);
let upcount = JSON.parse(localStorage.getItem("count"));

inputObj.title = "";
inputObj.desc = "";
inputObj.status = "";
inputObj.priority = "";
inputObj.id = "";

function addNewInnerCard(parentDiv) {
  console.log(upcount++);

  inputObj.status = Cstatus.value;
  inputObj.priority = prior.value;
  inputObj.id = uniqId();
  states.push({ ...inputObj });
  localStorage.setItem("ITEM", JSON.stringify(states));
  addInput.style.display = "none";
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

  return `<div id="${id}" class="innerCard" draggable="true">
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
    <div class="delete icon" id="deletecon" onclick=deleteIcon(this.id)
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
      style = "";
      todo += card(el);
    } else if (el["status"] === "In Progress") {
      style = "";
      inprog += card(el);
    } else if (el["status"] === "Stuck") {
      stuckv += card(el);
      style = "";
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
    });
  });

  style = "";
};

// deletecon.forEach((el) => {
//   el.addEventListener("click", () => {
//     deleteIcon(el.id);
//   });
// });

render();
states.forEach((el) => {
  console.log(typeof el.id);
});
