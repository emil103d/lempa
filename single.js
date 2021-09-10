const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://persongalleri-f565.restdb.io/rest/lempa";

const myHeaders = {
  "x-apikey": "6139d2db43cedb6d1f97eec1",
};

let lamper;

console.log("ID", id);
document.addEventListener("DOMContentLoaded", loadJSON);

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

function visLampen(lamper) {
  let container = document.querySelector(".product");
  console.log(lamper);
  container.querySelector("h2").textContent = lamper.Model;
  container.querySelector(".pris").textContent = lamper.Pris + ",-";
  container.querySelector("img").src = "billeder/" + lamper.billede + ".svg";
  container.querySelector("p").innerHTML =
    "<strong>Beskrivelse:</strong> " + lamper.Langbeskrivelse;
  container.querySelector(".anden").innerHTML =
    "<strong>Materiale:</strong> " + lamper.Materiale;
}
//   document.querySelector("h3").textContent = menu.navn;
//   document.querySelector(".oprindelse").textContent =
//     "Oprindelse: " + menu.oprindelsesregion;
//   document.querySelector(".beskrivelse").textContent = menu.langbeskrivelse;
//   document.querySelector(".pris").textContent = "Pris: " + menu.pris + ",-";
//   document.querySelector("button").addEventListener("click", tilbageTilMenuen);
// }

// function tilbageTilMenuen() {
//   history.back();
// }
