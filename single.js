const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://persongalleri-f565.restdb.io/rest/lempa";

const myHeaders = {
  "x-apikey": "6139d2db43cedb6d1f97eec1",
};

let lamper;
let filter = "";
let kategori;

// sørg for at DOM'en er loaded

console.log("ID", id);
document.addEventListener("DOMContentLoaded", start);

// Lav en eventlistener på farve knapper

function start() {
  const filterKnapper = document.querySelectorAll(".farve button");
  filterKnapper.forEach((knap) => knap.addEventListener("click", filtrerFarve));
  console.log(filterKnapper);
  loadJSON();
}

// Få lampen til at skifte farve, ved tryk på respektive knap og marker knap.

function filtrerFarve() {
  if (lamper.Kategori == "Pendel") {
    kategori = "loftlampe";
  } else if (lamper.Kategori == "Væglampe") {
    kategori = "væglampe";
  } else if (lamper.Kategori == "Gulvlampe") {
    kategori = "gulvlampe";
  }
  console.log(this);
  filter = this.dataset.farve;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  console.log(filter);
  if (filter == "Grey") {
    document.querySelector(".product img").src =
      "billeder/" + kategori + "_grey.svg";
  } else if (filter == "Gul") {
    document.querySelector(".product img").src =
      "billeder/" + kategori + "_gul.svg";
  } else if (filter == "Sort") {
    document.querySelector(".product img").src =
      "billeder/" + kategori + "_sort.svg";
  }
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
  visLampen();
}

// vis lampen og udskriv beskrivelser for den. Til slut en eventlistener på en "tilbage" knap

function visLampen() {
  let container = document.querySelector(".product");
  console.log(lamper.Kategori);
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
    .addEventListener("click", gaaTilContact);
  container
    .querySelector(".tilbage")
    .addEventListener("click", tilbageTilForsiden);
}

// Gå tilbage hvor du kom fra

function tilbageTilForsiden() {
  history.back();
}

function gaaTilContact() {
  location.href = `contact.html`;
}
