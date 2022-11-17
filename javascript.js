let arrayNote = [];
addAllNotes();
//-----------ADD ALL NOTES FROM LOCAL STOREGE------------
function addAllNotes() {
  allNotes = getItemFeomLocalS();
   console.log(allNotes);
    console.log(allNotes.length);
    if(allNotes){
  for (let k = 0; k < allNotes.length; k++) {
    console.log(allNotes[k]);
    let obj = allNotes[k];
    console.log(obj.title);
    let span = document.createElement("SPAN");
    let textNode = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(textNode);
    let li = document.createElement("li");
    let textNote = document.createTextNode(obj.title);
    li.appendChild(textNote);
    li.appendChild(span);
    document.querySelector("ul").appendChild(li);
  }}
}

//-------------------ADD NOTE------------------------
function newElement() {
  let span = document.createElement("SPAN");
  let textNode = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(textNode);

  let li = document.createElement("li");
  let inputValue = document.querySelector("#todo").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    li.appendChild(span);
    document.querySelector("ul").appendChild(li);
  }
  document.getElementById("todo").value = "";
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  addtask(inputValue);
}

//-------------------DELETE--------------------
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
    window.localStorage.removeItem(close[i]);
  };
}
//------------------CHECKED----------------------
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
//----------ADD TASK TO ARRAY-----
function addtask(inputValue) {
  const task = {
    id: Date.now(),
    title: inputValue,
    complete: false,
  };
  arrayNote.push(task);
  addToLocalS(arrayNote);
  console.log(arrayNote);
}

//---------------ADD TOO LOCAL STOREGE------------------
function addToLocalS(task) {
  window.localStorage.setItem("Notes", JSON.stringify(task));
}

//-----------GET FROM LOCAL STOREGE--------------------
function getItemFeomLocalS() {
  let data = window.localStorage.getItem("Notes");
  if (data) {
    let tasks = JSON.parse(data);
    //addTaskArray(tasks);
    // console.log("this is " + tasks);
    // console.log(tasks);
    return tasks;
  }
}

//------------------------------------------------
function addTaskArray(arrayNote) {
  arrayNote.foreach((Notes) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(Notes.title));
  });
}
