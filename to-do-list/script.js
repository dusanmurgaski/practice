let dugmeDodaj = document.getElementById("dodaj");
let dugmeIzbrisi = document.getElementById("izbrisiSve");
let tekst = document.getElementById("tekst");
let lista = document.getElementById("lista");
let ul = document.createElement("ul");
let li = document.createElement("li");
lista.appendChild(ul);

dugmeDodaj.addEventListener("click", (e) => {
  e.preventDefault();
  let unos = tekst.value;
  if (unos == "" || unos == null) {
    alert("input polje je prazno");
  } else {
    let liUnos = document.createElement("li");
    liUnos.textContent = unos;
    ul.appendChild(liUnos);
    let obrisiPor = document.createElement("button");
    obrisiPor.className = "fa fa-trash-o";
    obrisiPor.style = "font-size:24px";
    liUnos.appendChild(obrisiPor);
    tekst.value = null;
    let uradjenoDugme = document.createElement("button");
    uradjenoDugme.textContent = "Uradjeno!";
    liUnos.appendChild(uradjenoDugme);
    uradjenoDugme.addEventListener("click", () => {
      liUnos.style = "font-size:35px";
      liUnos.style.color = "red";
    });
    obrisiPor.addEventListener("click", () => {
      liUnos.remove();
    });
  }
});
