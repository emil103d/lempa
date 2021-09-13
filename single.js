const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://persongalleri-f565.restdb.io/rest/lempa";

const myHeaders = {
  "x-apikey": "6139d2db43cedb6d1f97eec1",
};

let lamper;
let filter = "";

// sørg for at DOM'en er loaded

console.log("ID", id);
document.addEventListener("DOMContentLoaded", start);

// Lav en eventlistener på farve knapper

function start() {
  const filterKnapper = document.querySelectorAll(".farve button");
  filterKnapper.forEach((knap) => knap.addEventListener("click", filtrerFarve));
  loadJSON();
}

// Få lampen til at skifte farve, ved tryk på respektive knap og marker knap.

function filtrerFarve() {
  filter = this.dataset.Farve;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
}

// Indlæs id'ets data fra Restdb.io og gå videre til at vise lampen

async function loadJSON() {
  const JSONData = await fetch(
    `https://persongalleri-f565.restdb.io/rest/lempa/${id}`,
    {
      headers: myHeaders,
    }
  );
  lamper = await JSONData.json();
  console.log("Lamper", lamper);
  visLampen(lamper);
}

// vis lampen og udskriv beskrivelser for den. Til slut en eventlistener på en "tilbage" knap

function visLampen(lamper) {
  let container = document.querySelector(".product");
  console.log(lamper);
  container.querySelector("h2").textContent = lamper.Model;
  container.querySelector(".pris").textContent = lamper.Pris + ",-";
  container.querySelector("img").src = "billeder/" + lamper.billede + ".svg";
  if (lamper.Kategori == "Gulvlampe") {
    container.querySelector("div").classList.add("vægLampe");
  } else if (lamper.Kategori == "Væglampe") {
    container.querySelector("div").classList.add("vægLampe");
  }

  container.querySelector("p").innerHTML =
    "<strong>Beskrivelse:</strong> " + lamper.Langbeskrivelse;
  container.querySelector(".anden").innerHTML =
    "<strong>Materiale:</strong> " + lamper.Materiale;
  container
    .querySelector("article button")
    .addEventListener("click", tilbageTilForsiden);
}

// Gå tilbage hvor du kom fra

function tilbageTilForsiden() {
  history.back();
}
