export {
  generacion,
  getRandomTrainer,
  scanerTrainers,
  trainers1gen,
  trainers2gen,
  trainers3gen,
  trainers4gen,
  trainers5gen,
  trainers6gen,
  trainers7gen,
  trainers8gen,
  trainers9gen,
  updateTrainerGeneration,
};

const trainers1gen = [
  "ash",
  "misty",
  "brock",
  "surge",
  "erika",
  "koga",
  "sabrina",
  "blaine",
  "giovanni",
  "lorelei",
  "bruno",
  "agatha",
  "lance",
  "azul",
];

const trainers2gen = [
  "pegaso",
  "anton",
  "blanca",
  "morti",
  "anibal",
  "fredo",
  "jasmina",
  "debora",
];

const trainers3gen = [
  "brendan",
  "may",
  "roxanne",
  "brawly",
  "wattson",
  "flannery",
  "norman",
  "winona",
  "tate and liza",
  "wallace",
  "sidney",
  "phoebe",
  "glacia",
  "drake",
  "steven",
];

const trainers4gen = [
  "lucas",
  "dawn",
  "roark",
  "gardenia",
  "maylene",
  "crasher wake",
  "fantina",
  "byron",
  "candice",
  "volkner",
  "aaron",
  "bertha",
  "flint",
  "lucian",
  "cynthia",
];

const trainers5gen = [
  "hilbert",
  "hilda",
  "cheren",
  "bianca",
  "cilan",
  "chili",
  "cress",
  "lenora",
  "burgh",
  "elesa",
  "clay",
  "skyla",
  "brycen",
  "drayden",
  "iris",
  "shauntal",
  "grimsley",
  "caitlin",
  "marshal",
  "alder",
];

const trainers6gen = [
  "calem",
  "serena",
  "viola",
  "grant",
  "korrina",
  "ramos",
  "clemont",
  "valerie",
  "olympia",
  "wulfric",
  "malva",
  "siebold",
  "wikstrom",
  "drasna",
  "diantha",
];

const trainers7gen = [
  "elio",
  "selene",
  "ilima",
  "lana",
  "kiawe",
  "mallow",
  "sophocles",
  "acerola",
  "nanu",
  "hapu",
  "molayne",
  "olivia",
  "kahili",
  "rika",
  "kukui",
];

const trainers8gen = [
  "victor",
  "gloria",
  "milo",
  "nessa",
  "kabu",
  "bea",
  "allister",
  "opal",
  "gordie",
  "melony",
  "piers",
  "raihan",
  "leon",
  "mustard",
  "klara",
  "avery",
];

const trainers9gen = [
  "araceli",
  "brais",
  "enigma",
  "fuko",
  "laureano",
  "lima",
  "tuli",
  "grusha",
];

let generacion = 1;

function scanerTrainers() {
  switch (generacion) {
    case 1:
      return trainers1gen;
    case 2:
      return trainers2gen;
    case 3:
      return trainers3gen;
    case 4:
      return trainers4gen;
    case 5:
      return trainers5gen;
    case 6:
      return trainers6gen;
    case 7:
      return trainers7gen;
    case 8:
      return trainers8gen;
    case 9:
      return trainers9gen;
    default:
      return trainers1gen;
  }
}

function getRandomTrainer() {
  let trainers = scanerTrainers();
  return trainers[Math.floor(Math.random() * trainers.length)];
}

function updateTrainerGeneration() {
  let select = document.getElementById("select-trainer");
  generacion = select.selectedIndex;
}
