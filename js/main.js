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

function generateRandomNumber(bound) {
    return Math.floor(Math.random() * bound)
}

function setRandomAccent() {
    let accent = generateRandomNumber(accentColors.length);
    document.body.classList.add("Accent" + accentColors[accent]);
}

setRandomAccent();
