let prvi = document.getElementById("prvi");
let drugi = document.getElementById("drugi");
let treci = document.getElementById("treci");
let cetvrti = document.getElementById("cetvrti");
let peti = document.getElementById("peti");
let sesti = document.getElementById("sesti");
let div = document.getElementById("container");
let reset = document.getElementById("reset");
let brojac = 0;
let prviKlik;
let drugiKlik;
let clock;
let score = 0;
let fail = 0;

div.addEventListener("click", (e) => {
  if (e.target.id == "prvi") {
    let img = document.createElement("img");
    img.src = "1.png";
    img.id = "prva";
    prvi.appendChild(img);
  } else if (e.target.id == "drugi") {
    let img = document.createElement("img");
    img.src = "2.png";
    img.id = "druga";

    drugi.appendChild(img);
  } else if (e.target.id == "treci") {
    let img = document.createElement("img");
    img.src = "3.png";
    img.id = "treca";
    treci.appendChild(img);
  } else if (e.target.id == "cetvrti") {
    let img = document.createElement("img");
    img.src = "3.png";
    img.id = "treca";
    cetvrti.appendChild(img);
  } else if (e.target.id == "peti") {
    let img = document.createElement("img");
    img.src = "1.png";
    img.id = "prva";
    peti.appendChild(img);
  } else if (e.target.id == "sesti") {
    let img = document.createElement("img");
    img.src = "2.png";
    img.id = "druga";
    sesti.appendChild(img);
  }
  if (e.target.tagName == "DIV") {
    brojac++;
    console.log(brojac);
    console.log(prviKlik);
    console.log(drugiKlik);
  }
  if (brojac == 1) {
    prviKlik = e.target.querySelector("img");
  } else if (brojac == 2) {
    drugiKlik = e.target.querySelector("img");
  }
  if (brojac == 2) {
    if (prviKlik.id == drugiKlik.id) {
      score++;
      let scoreV = document.getElementById("score");
      scoreV.textContent = `Score: ${score}`;
      clock = setTimeout(() => {
        prviKlik.remove();
        drugiKlik.remove();
        brojac = 0;
        alert("Bravo!");
      }, 10);
    } else {
      fail++;
      let failV = document.getElementById("fail");
      failV.textContent = `Failed Attempts: ${fail}`;
      clock = setTimeout(() => {
        prviKlik.remove();
        drugiKlik.remove();
        brojac = 0;
        alert("Try again!");
      }, 10);
    }
  }
});

reset.addEventListener("click", () => {
  score = 0;
  fail = 0;
  let failV = document.getElementById("fail");
  failV.textContent = `Failed Attempts: ${fail}`;
  let scoreV = document.getElementById("score");
  scoreV.textContent = `Score: ${score}`;
});
