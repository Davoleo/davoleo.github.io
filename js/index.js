/********************
 *  Coded By Davoleo
 ********************/

let miscImages = [
    "res/img/pp/assassination.gif",
    "res/img/pp/Black-Lagoon-1.gif",
    "res/img/pp/black_bullet.gif",
    "res/img/pp/black_lagoon_2.gif",
    "res/img/pp/circle-corner-brackets.png",
    "res/img/pp/circle-dl.png",
    "res/img/pp/circle-fire.png",
    "res/img/pp/circle-L.png",
    "res/img/pp/demon_slayer.gif",
    "res/img/pp/erased.gif",
    "res/img/pp/fire.jpg",
    "res/img/pp/haruhi_suuzumiya_2.gif",
    "res/img/pp/haruhi_suzumiya_1.gif",
    "res/img/pp/id_invaded.gif",
    "res/img/pp/L.jpg",
    "res/img/pp/leonardo-watch-1.gif",
    "res/img/pp/leonardo-watch-2.gif",
    "res/img/pp/magical_girl_lyrical_nanoha.gif",
    "res/img/pp/new-game.gif",
    "res/img/pp/rouxls-kaard.png",
    "res/img/pp/rouxls-kaard_shop.gif",
    "res/img/pp/run-with-the-wind.gif",
    "res/img/pp/ryuko.gif",
    "res/img/pp/shakugan_no_shana.gif",
    "res/img/pp/steins;gate0.gif",
];

function setRandomImage() {
    let miscImageLink = generateRandomNumber(miscImages.length);
    document.getElementById("img-col").setAttribute("src", miscImages[miscImageLink]);
}

setRandomImage();