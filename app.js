import "/comps/carousel_controls.js";
import "/comps/slide.js";
import "/comps/carousel.js";
import "/comps/carousel_full.js";




const $app = document.querySelector("#app");
const $inc = document.createElement("div");
const $full = document.createElement("div");
// $inc.classList.add("p-5", "bg-dark", "mb-5");
// $inc.classList.add("bg-dark", "mb-5");
document.body.append($inc);
document.body.prepend($full);
// $app.appendChild($inc);
// $app.setAttribute("include-HTML", "./incs/carousel.html");
$app.setAttribute("include-HTML", "./incs/slide.html");
$inc.setAttribute("include-HTML", "./incs/carousel.html");
$full.setAttribute("include-HTML", "./incs/carousel_full.html");
// $app.appendChild($inc);
// console.log($app);
// $app.innerHTML = '<div id="app" include-HTML="./incs/carousel.html"></div>';
