let $check = document.querySelector("#test");
let $bbb = document.querySelector("#carouselb div");
const clickedIt = (e) => {
  console.log(e);
  $bbb.carousel("next");
  console.log("clicked");
};
$check.addEventListener("click", clickedIt);

console.log($check);
console.log($bbb);
debugger;
