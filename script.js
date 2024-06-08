let $carousel = "";

function findAncestor(el, cls) {
  console.log(el, cls);
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

function testo(flag) {
  console.log("flag ======> ", flag);
  // findAncestor(flag, "carousel")
}

function hideCarouselPrevBtn() {
  let $carouselControls =
    document.querySelector("#carousel-controls").shadowRoot.children[3];
  // console.log($carouselControls.shadowRoot.children[3]);
  let prevbtn = $carouselControls.querySelector(".carousel-control-prev");
  console.log(prevbtn);
  prevbtn.classList.add("d-none");
  return;
}

function advanceCarousel(flag) {
  console.log(flag);
  flag.cycle();
}

function advanceCarouselfromSlide(flag) {
  // !flag ? (flag = $carousel) : "";
  // console.log("$carousel = ", $carousel);
  console.log(flag);
  flag.next();
  // $carousel.next();
}
