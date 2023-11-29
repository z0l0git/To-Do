const todo = document.getElementById("todo");
const inprog = document.getElementById("inprog");
const stuck = document.getElementById("stuck");
const done = document.getElementById("done");

const targetTodo = document.getElementById("targetTodo")
const targetProg = document.getElementById("targetProg")
const targetStuck = document.getElementById("targetStuck")
const targetDone = document.getElementById("targetDone")

const drag = document.querySelectorAll(".dem_con");

const inputBox = document.getElementById("inputBox");

const addbtn = document.getElementById("addbtn");

const addInput = document.getElementById("input");


drag.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("box", event.target.id);
    console.log(event);
  });
});

// target.forEach((el) => {
//   el.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });
// });

// function dragGrab(){
//   const dragId = event.dataTransfer.getData("box");
//   const dragItem = document.getElementById(dragId);
//   target.forEach((el) => {

//       el.appendChild(dragItem);
      
//   });
  
// };

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
  targetTodo.appendChild(dragItem)

});


inprog.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  targetProg.appendChild(dragItem)

});

stuck.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  targetStuck.appendChild(dragItem)
  
});

done.addEventListener("drop", (event) => {
  const dragId = event.dataTransfer.getData("box");
  const dragItem = document.getElementById(dragId);
  targetDone.appendChild(dragItem)

});


// target.forEach((el) =>{
//   console.log(el);
//     el.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });

//   el.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const dragId = event.dataTransfer.getData("box");
//     const dragItem = document.getElementById(dragId);
//     inprog.parentNode.insertBefore(dragItem, inprog.nextSibling);
//   // el.appendChild(dragItem);
//   });

// });


