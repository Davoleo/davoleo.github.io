/********************
 *  Coded By Davoleo
 ********************/

let miscImages = [
    "res/img/anime.jpg",
    "res/img/pc.png",
    "res/img/minecraft.jpg"
];

function setRandomImage() {
    let miscImageLink = generateRandomNumber(miscImages.length);
    document.querySelector("#misc img").setAttribute("src", miscImages[miscImageLink]);
}

setRandomImage();