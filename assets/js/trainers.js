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
  "Ash",
  "Misty",
  "Brock",
  "Surge",
  "Erika",
  "Koga",
  "Sabrina",
  "Blaine",
  "Giovanni",
  "Lorelei",
  "Bruno",
  "Agatha",
  "Lance",
  "Azul",
];

const trainers2gen = [
  "Pegaso",
  "Anton",
  "Blanca",
  "Morti",
  "Anibal",
  "Fredo",
  "Jasmina",
  "Debora",
];

const trainers3gen = [
  "Brendan",
  "May",
  "Roxanne",
  "Brawly",
  "Wattson",
  "Flannery",
  "Norman",
  "Winona",
  "Tate and Liza",
  "Wallace",
  "Sidney",
  "Phoebe",
  "Glacia",
  "Drake",
  "Steven",
];

const trainers4gen = [
  "Lucas",
  "Dawn",
  "Roark",
  "Gardenia",
  "Maylene",
  "Crasher Wake",
  "Fantina",
  "Byron",
  "Candice",
  "Volkner",
  "Aaron",
  "Bertha",
  "Flint",
  "Lucian",
  "Cynthia",
];

const trainers5gen = [
  "Hilbert",
  "Hilda",
  "Cheren",
  "Bianca",
  "Cilan",
  "Chili",
  "Cress",
  "Lenora",
  "Burgh",
  "Elesa",
  "Clay",
  "Skyla",
  "Brycen",
  "Drayden",
  "Iris",
  "Shauntal",
  "Grimsley",
  "Caitlin",
  "Marshal",
  "Alder",
];

const trainers6gen = [
  "Calem",
  "Serena",
  "Viola",
  "Grant",
  "Korrina",
  "Ramos",
  "Clemont",
  "Valerie",
  "Olympia",
  "Wulfric",
  "Malva",
  "Siebold",
  "Wikstrom",
  "Drasna",
  "Diantha",
];

const trainers7gen = [
  "Elio",
  "Selene",
  "Ilima",
  "Lana",
  "Kiawe",
  "Mallow",
  "Sophocles",
  "Acerola",
  "Nanu",
  "Hapu",
  "Molayne",
  "Olivia",
  "Kahili",
  "Rika",
  "Kukui",
];

const trainers8gen = [
  "Victor",
  "Gloria",
  "Milo",
  "Nessa",
  "Kabu",
  "Bea",
  "Allister",
  "Opal",
  "Gordie",
  "Melony",
  "Piers",
  "Raihan",
  "Leon",
  "Mustard",
  "Klara",
  "Avery",
];

const trainers9gen = [
  "Araceli",
  "Brais",
  "Enigma",
  "Fuko",
  "Laureano",
  "lima",
  "Tuli",
  "Grusha",
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
