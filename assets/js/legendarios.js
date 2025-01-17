const legendarios = [
  ["Articuno", "Zapdos", "Moltres", "Mewtwo", "Mew"],
  ["Raikou", "Entei", "Suicune", "Lugia", "Ho-oh", "Celebi"],
  [
    "Regirock",
    "Regice",
    "Registeel",
    "Latias",
    "Latios",
    "Kyogre",
    "Groudon",
    "Rayquaza",
    "Jirachi",
    "Deoxys",
  ],
  [
    "Uxie",
    "Mesprit",
    "Azelf",
    "Dialga",
    "Palkia",
    "Heatran",
    "Regigigas",
    "Giratina",
    "Cresselia",
    "Phione",
    "Manaphy",
    "Darkrai",
    "Shaymin",
    "Arceus",
  ],
  [
    "Victini",
    "Cobalion",
    "Terrakion",
    "Virizion",
    "Tornadus",
    "Thundurus",
    "Reshiram",
    "Zekrom",
    "Landorus",
    "Kyurem",
    "Keldeo",
    "Meloetta",
    "Genesect",
  ],
  ["Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion"],
  [
    "Silvally",
    "Cosmog",
    "Cosmoem",
    "Solgaleo",
    "Lunala",
    "Necrozma",
    "Magearna",
    "Marshadow",
    "Zeraora",
  ],
  [
    "Eternatus",
    "Kalyrex",
    "Zacian",
    "Zamazeta",
    "Kubfu",
    "Urshifu",
    "Glasterier",
    "Spectrier",
  ],
  [
    "Koraidon",
    "Miraidon",
    "Terapagos",
    "Okidogi",
    "Chienpao",
    "Tinglu",
    "Chiyu",
  ],
];

/*
const legendarios1Gen = legendarios[0];
const legendarios2Gen = legendarios[1];
const legendarios3Gen = legendarios[2];
const legendarios4Gen = legendarios[3];
const legendarios5Gen = legendarios[4];
const legendarios6Gen = legendarios[5];
const legendarios7Gen = legendarios[6];
const legendarios8Gen = legendarios[7];
const legendarios9Gen = legendarios[8];
*/

let legendario = 1;

function scanerLegend() {
  switch (legendario) {
    case 1:
      return legendarios[0];
    case 2:
      return legendarios[1];
    case 3:
      return legendarios[2];
    case 4:
      return legendarios[3];
    case 5:
      return legendarios[4];
    case 6:
      return legendarios[5];
    case 7:
      return legendarios[6];
    case 8:
      return legendarios[7];
    case 9:
      return legendarios[8];
    default:
      return legendarios[0];
  }
}

document.getElementById("select-LeGen").addEventListener("change", function () {
  let select = document.getElementById("select-LeGen");
  legendario = select.selectedIndex;
  console.log(getRandomTrainer());
});

function getRandomTrainer() {
  let legendarioDef = scanerLegend();
  return legendarioDef[Math.floor(Math.random() * legendarioDef.length)];
}
