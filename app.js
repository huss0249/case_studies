import "/comps/slide.js";
import "/comps/carousel.js";

const $app = document.querySelector("#app");
// const $inc = document.createElement("div");
const $full = document.createElement("div");

// document.body.append($inc);
document.body.prepend($full);

$full.setAttribute("include-HTML", "./incs/carousel_01.html");
$app.setAttribute("include-HTML", "./incs/carousel_02.html");
// $inc.setAttribute("include-HTML", "./incs/carousel_03.html");
