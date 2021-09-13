let knap = document.querySelector(".kontaktknap");
let takknap = document.querySelector(".takknap");
let pop = document.querySelector(".popup_container");

knap.addEventListener("click", tak);
console.log("tak");

function tak() {
  pop.style.display = "block";
  takknap.addEventListener("click", () => (pop.style.display = "none"));
}
