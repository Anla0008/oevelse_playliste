// Definerer en array med sangtitler
const sange = ["TV", "Flying:))", "my future", "hotline (edit)", "Good luck, babe!", "BLUE", "Why", "Lost", "Meet Me Halfway", "Sunshine"];

// Vælger det første <ul>-element på siden og gemmer det i variablen "liste"
const liste = document.querySelector("ul");

// Kører funktionen "lavListe" for hver sangtitel i arrayet "sange"
sange.forEach(lavListe);

// Definerer funktionen "lavListe", som tager en sangtitel som argument
function lavListe(sange) {
  // Tilføjer en ny <li>-element til listen med sangtitlen som indhold
  liste.innerHTML += "<li>" + sange + "</li>";
}
