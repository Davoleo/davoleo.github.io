"use strict";

/********************
 *  Coded By Davoleo
 ********************/
var miscImages = ["res/img/pp/black_bullet.gif", "res/img/pp/circle-corner-brackets.png", "res/img/pp/circle-dl.png", "res/img/pp/circle-fire.png", "res/img/pp/circle-L.png", "res/img/pp/erased.gif", "res/img/pp/fire.jpg", "res/img/pp/haruhi_suuzumiya_2.gif", "res/img/pp/haruhi_suzumiya_1.gif", "res/img/pp/id_invaded.gif", "res/img/pp/L.jpg", "res/img/pp/leonardo-watch-2.gif", "res/img/pp/new-game.gif", "res/img/pp/rouxls-kaard.png", "res/img/pp/rouxls-kaard_shop.gif", "res/img/pp/ryuko.gif", "res/img/pp/shakugan_no_shana.gif", "res/img/pp/steins;gate0.gif"];
var quotes = ["The meaning of life, the universe and everything: 42", "Material Design huh, what does it mean?", "Always Under Construction!", "<em>PogChamp</em>", "Beep Boop ~ Welcome User!", "ね～、ありがとう for visiting my website >_<", //"Thanks for visiting my website. >_<",
"REOL is cute, E.O.S.", "DΛVӨLΣӨ is the <em>aesthetic</em> version of Davoleo"];

function setRandomImage() {
  var miscImageLink = generateRandomNumber(miscImages.length);
  document.getElementById("img_col").setAttribute("src", miscImages[miscImageLink]);
}

function setRandomQuote() {
  var quoteId = generateRandomNumber(quotes.length);
  var quoteElement = document.getElementById("sliding_title");
  quoteElement.innerHTML = quotes[quoteId];
  quoteElement.setAttribute("data-length", quotes[quoteId].length.toString());
}

setRandomImage();
setRandomQuote();