let lamper;
let filter = "alle";

document.addEventListener("DOMContentLoaded", start);

//Funktion start:
function start() {
  let filterKnapper = document.querySelectorAll(".navKategori button");
  filterKnapper.forEach(
    (knap) => knap.addEventListener("click", filtrerLamper) // Tilføjelse af eventlisteners så filtringsknapperne virker
  );
  hentData();
}

// function filtrerLamper: Filtere lamperne ved tryk på respektive knap og markere den valgte knap.
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

// async funktion: Her bliver daten på alle lamper hentet ned
async function hentData() {
  const respons = await fetch(url, options);
  lamper = await respons.json();
  console.log(lamper);
}

// Function vislamper:
function visLamper() {
  let container = document.querySelector("#template_section");
  let lampeTemplate = document.querySelector("template").content;
  container.textContent = "";
  lamper.forEach((lampe) => {
    const klon = lampeTemplate.cloneNode(true);
    console.log("Kategori", lampe.Kategori);
    if (filter == lampe.Kategori) {
      // Når man f.eks. trykker på væglamper bliver alle væglamper større og alle andre kategorier bliver mindre.
      klon.querySelector("figure").classList.add("zoomIn");
    } else if (filter != lampe.Kategori) {
      klon.querySelector("figure").classList.add("zoomOut");
    }

    if (lampe.Kategori == "Gulvlampe") {
      // Hvis kategorien er gulvlampe skal billerdne lægge sig i bunden
      klon.querySelector("figure").classList.add("bund");
    } else if (lampe.Kategori == "Pendel") {
      // Hvis kategorien er Pendel skal billerdne lægge sig i toppen
      klon.querySelector("figure").classList.add("top");
    } else if (lampe.Kategori == "Væglampe") {
      // Hvis kategorien er Væglampe skal billerdne lægge sig i midten
      klon.querySelector("figure").classList.add("midte");
    }
    klon.querySelector("img").src = "billeder/" + lampe.billede + ".svg"; //Her klones lampe billerne så de vises på skærmen
    klon
      .querySelector(".lampePortefolio")
      .addEventListener("click", () => visLampe(lampe)); // Her kommer man til singleview
    container.appendChild(klon); // Viser billederne
  });
}

// Function visLampe: Når man trykker på en lampe bliver man sendt over til product.html og til den specifikke lampe id
function visLampe(lampe) {
  location.href = `product.html?id=${lampe._id}`;
  console.log(visLampe);
}
