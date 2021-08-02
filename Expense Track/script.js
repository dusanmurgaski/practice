let tabela = document.querySelector("table");
let obrisiTr = document.getElementById("del");
let naziv = document.getElementById("naziv");
let datum = document.getElementById("datum");
let svota = document.getElementById("svota");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  td1.textContent = naziv.value;
  td2.textContent = datum.value;
  td3.textContent = svota.value;
  td4.innerHTML = "<button id='dugme'>";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tabela.appendChild(tr);
  obrisiTr.remove();
  let dugme = document.getElementById("dugme");
  dugme.addEventListener("click", (e) => {
    tr.remove();
    tabela.appendChild(obrisiTr);
  });
  naziv.value = null;
  datum.value = null;
  svota.value = null;
});
