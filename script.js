const menuKnap = document.querySelector(".menuknap");
let menuOpen = false;
let lamper;
let filter = "alle";

document.addEventListener("DOMContentLoaded", start);

function start() {
  let filterKnapper = document.querySelectorAll("navKategori button");
  filterKnapper.forEach((knap) =>
    knap.addEventListener("click", filtrerLamper)
  );
  hentData();
}

function filtrerLamper() {
  filter = this.dataset.kategori;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  visLamper(); //kald funktionen visLamper efter det nye filter er sat
}

const url = "https://persongalleri-f565.restdb.io/rest/lempa";
const options = {
  headers: {
    "x-apikey": "6139d2db43cedb6d1f97eec1",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  lamper = await respons.json();
  console.log(lamper);
  visLamper();
}

function visLamper() {
  let container = document.querySelector("#template_section");
  let lampeTemplate = document.querySelector("template").content;
  container.textContent = "";
  lamper.forEach((lampe) => {
    console.log("Kategori", lampe.kategori);
    if (filter == lampe.kategori || filter == "alle") {
      const klon = lampeTemplate.cloneNode(true);
      klon.querySelector("img").src = "billeder/" + lampe.billednavn + ".svg";
      container.appendChild(klon);
      document
        .querySelector(".lampePortefolio")
        .addEventListener("click", () => {
          location.href = `product.html?id=${lampe._id}`;
        });
    }
  });
}

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
