let accentColors = [
    "Gold",
    "Lime",
    "Green",
    "Aqua",
    "LightBlue",
    "Pink",
    "Red",
    "ClearSky"
];

let accent = Math.floor(Math.random() * accentColors.length);
document.body.classList.add("Accent" + accentColors[accent]);

//DOM Items
let cardImage = document.getElementById("dynamic-card-img");
let cardLink = document.getElementById("dynamic-card-link");

