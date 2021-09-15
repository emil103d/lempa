document
  .querySelector(".tilbage")
  .addEventListener("click", tilbageTilForsiden);

function tilbageTilForsiden() {
  history.back();
}
