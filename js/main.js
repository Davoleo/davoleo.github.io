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

setRandomAccent();

function setRandomAccent() {
    let accent = Math.floor(Math.random() * accentColors.length);
    document.body.classList.add("Accent" + accentColors[accent]);
}


let contentArray = [
    {
        title: "Minecraft",
        image_url: "res/img/2019.png",
        link: "#"
    },
    {
        title: "Anime",
        image_url: "res/img/anime.jpg",
        link: "#"
    }
];