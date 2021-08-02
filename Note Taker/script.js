let noteTextArea = document.querySelector("textarea");
let btn = document.querySelector("button");
let div = document.querySelector("div");
let p = document.querySelector("p");
let overlay = document.getElementById("overlay");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let newNote = document.createElement("div");
  newNote.textContent = noteTextArea.value;
  div.appendChild(newNote);
  let novoDugme = document.createElement("button");
  novoDugme.textContent = "View Detail";
  div.appendChild(novoDugme);
  p.remove();
  novoDugme.addEventListener("click", (e) => {
    overlay.textContent = newNote.textContent;
  });
});
