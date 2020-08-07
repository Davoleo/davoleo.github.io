let accentColors = [
    "gold",
    "lime",
    "green",
    "aqua",
    "light-blue",
    "pink",
    "red",
    "clear-sky"
];

function generateRandomNumber(bound) {
    return Math.floor(Math.random() * bound)
}

function setRandomAccent() {
    const accent = generateRandomNumber(accentColors.length);
    document.body.classList.add("accent-" + accentColors[accent]);
}

setRandomAccent();
