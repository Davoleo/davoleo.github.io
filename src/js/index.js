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
    "ね～、ありがとう for visiting my website >_<",
    //"Thanks for visiting my website. >_<",
    "REOL is cute, E.O.S.",
    "DΛVӨLΣӨ is the <em>aesthetic</em> version of Davoleo"
]

function setRandomImage() {
    const miscImageLink = generateRandomNumber(miscImages.length);
    document.getElementById("img_col").setAttribute("src", miscImages[miscImageLink]);
}

function setRandomQuote() {
    const quoteId = generateRandomNumber(quotes.length);
    const marquees = document.getElementsByClassName("marquee");
    for (let quoteElement of marquees) {
        let quoteString = `${quotes[quoteId]}`;
        //while (quoteString.length < 180) {
        //    quoteString += `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0${quotes[quoteId]}`;
        //}
        quoteElement.innerHTML = quoteString;
    }
}

function showHideMoreLinksModal() {
    const modal = document.getElementById("more_links_modal");
    modal.classList.toggle("hidden");
    document.body.classList.toggle("modal-open");
}

//Set function to hide and show modal
const moreButton = document.querySelector("#second_row>a:nth-child(3)");
const closeButton = document.querySelector("#more_links_modal>a.close");
moreButton.addEventListener('click', showHideMoreLinksModal);
closeButton.addEventListener('click', showHideMoreLinksModal);

setRandomImage();
setRandomQuote();