/********************
 *  Coded By Davoleo
 ********************/

const miscImages = [
    "res/img/pp/black_bullet.gif",
    "res/img/pp/circle-corner-brackets.png",
    "res/img/pp/circle-dl.png",
    "res/img/pp/circle-fire.png",
    "res/img/pp/circle-L.png",
    "res/img/pp/erased.gif",
    "res/img/pp/fire.jpg",
    "res/img/pp/haruhi_suuzumiya_2.gif",
    "res/img/pp/haruhi_suzumiya_1.gif",
    "res/img/pp/id_invaded.gif",
    "res/img/pp/L.jpg",
    "res/img/pp/leonardo-watch-2.gif",
    "res/img/pp/new-game.gif",
    "res/img/pp/rouxls-kaard.png",
    "res/img/pp/rouxls-kaard_shop.gif",
    "res/img/pp/ryuko.gif",
    "res/img/pp/shakugan_no_shana.gif",
    "res/img/pp/steins;gate0.gif",
];

const quotes = [
    "The meaning of life, the universe and everything: 42",
    "Material Design huh, what does it mean?",
    "Always Under Construction!",
    "<em>PogChamp</em>",
    "Beep Boop ~ Welcome User!",
    ">_<"
]

function setRandomImage() {
    const miscImageLink = generateRandomNumber(miscImages.length);
    document.getElementById("img_col").setAttribute("src", miscImages[miscImageLink]);
}

function setRandomQuote() {
    const quoteId = generateRandomNumber(quotes.length);
    document.getElementById("sliding_title").innerHTML = quotes[quoteId];
}

setRandomImage();
setRandomQuote();