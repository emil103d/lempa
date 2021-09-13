const menuKnap = document.querySelector(".menuknap");
let menuOpen = false;

menuKnap.addEventListener("click", () => {
  if (!menuOpen) {
    menuKnap.classList.add("open");
    menuOpen = true;
    document.querySelector("#menu").classList.remove("hidden");
  } else {
    menuKnap.classList.remove("open");
    menuOpen = false;
    document.querySelector("#menu").classList.add("hidden");
  }
});
