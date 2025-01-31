export const legendarios = [
  ["articuno", "zapdos", "moltres", "mewtwo", "mew"],
  ["raikou", "entei", "suicune", "lugia", "ho-oh", "celebi"],
  [
    "regirock",
    "regice",
    "registeel",
    "latias",
    "latios",
    "kyogre",
    "groudon",
    "rayquaza",
    "jirachi",
    "deoxys",
  ],
  [
    "uxie",
    "mesprit",
    "azelf",
    "dialga",
    "palkia",
    "heatran",
    "regigigas",
    "giratina",
    "cresselia",
    "phione",
    "manaphy",
    "darkrai",
    "shaymin",
    "arceus",
  ],
  [
    "victini",
    "cobalion",
    "terrakion",
    "virizion",
    "tornadus",
    "thundurus",
    "reshiram",
    "zekrom",
    "landorus",
    "kyurem",
    "keldeo",
    "meloetta",
    "genesect",
  ],
  ["xerneas", "yveltal", "zygarde", "diancie", "hoopa", "volcanion"],
  [
    "silvally",
    "cosmog",
    "cosmoem",
    "solgaleo",
    "lunala",
    "necrozma",
    "magearna",
    "marshadow",
    "zeraora",
  ],
  [
    "eternatus",
    "kalyrex",
    "zacian",
    "zamazeta",
    "kubfu",
    "urshifu",
    "glasterier",
    "spectrier",
  ],
  [
    "koraidon",
    "miraidon",
    "terapagos",
    "okidogi",
    "chienpao",
    "tinglu",
    "chiyu",
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
