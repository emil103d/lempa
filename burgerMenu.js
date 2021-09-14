const menuKnap = document.querySelector(".menuknap");
let menuOpen = false; //menuen er som udgangspunkt lukket

// anonym funktion når man klikker på burgermenuen skal...
menuKnap.addEventListener("click", () => {
  if (!menuOpen) {
    // Hvis burgermenuen ikke er åben skal menuen åbne sig
    menuKnap.classList.add("open"); // Den øverste streg og den nederste former et kryds
    menuOpen = true; //menuen er åben
    document.querySelector("#menu").classList.remove("hidden"); //midter streg forsvinder og bliver et kryds
  } else {
    // Hvis burgermenuen er åben skal menuen lukkd sig
    menuKnap.classList.remove("open"); // Den øverste streg og den nederste går tilbage til en burgermenu
    menuOpen = false; //menuen er lukket
    document.querySelector("#menu").classList.add("hidden"); //midter streg kommer og der formes en burgermenu
  }
});
