export const legendarios = [
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

export let legendario = 1;

export function scanerLegend() {
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

export function getRandomLegendary() {
  let legendarioDef = scanerLegend();
  return legendarioDef[Math.floor(Math.random() * legendarioDef.length)];
}

export function handleLegendaryChange() {
  let select = document.getElementById("select-LeGen");
  if (select) {
    legendario = select.selectedIndex;
  }
}
