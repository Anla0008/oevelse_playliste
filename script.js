const sange = ["TV", "Flying:))", "my future", "hotline (edit)", "Good luck, babe!", "BLUE", "Why", "Lost", "Meet Me Halfway", "Sunshine"];
const liste = document.querySelector("ul");

sange.forEach(lavListe);

function lavListe(sange) {
  liste.innerHTML += "<li>" + sange + "</li>";
}
