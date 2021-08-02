let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let tekst = input.value;
  let nizTeksta = Array.from(tekst);
  let sum = 0;
  nizTeksta.forEach((elem) => {
    if (
      elem === "a" ||
      elem === "e" ||
      elem === "i" ||
      elem === "o" ||
      elem === "u"
    ) {
      sum++;
    }
  });
  alert(sum);
});
