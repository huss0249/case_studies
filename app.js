import "/comps/slide.js";
import "/comps/carousel.js";

const $app = document.querySelector("#app");
const $inc = document.createElement("div");
$inc.classList.add("p-5", "bg-dark", "mb-5");
document.body.prepend($inc);
// $app.appendChild($inc);
// $app.setAttribute("include-HTML", "./incs/carousel.html");
$app.setAttribute("include-HTML", "./incs/slide.html");
$inc.setAttribute("include-HTML", "./incs/carousel.html");
// $app.appendChild($inc);
// console.log($app);
// $app.innerHTML = '<div id="app" include-HTML="./incs/carousel.html"></div>';
