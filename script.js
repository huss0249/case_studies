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

function advanceCarouselfromSlide(e) {
  // !flag ? (flag = $carousel) : "";
  // console.log("$carousel = ", $carousel);
  // console.log("advanceCarouselfromSlide => ", e.target);
  // let wwww = new bootstrap.Carousel(flag);
  // document.querySelectorAll(".carousel")[0].next();
  console.log(document.querySelectorAll(".carousel")[0]);
  // wwww.cycle();
  $carousel = new bootstrap.Carousel(document.querySelector("#carousel01"));
  console.log($carousel);

  $carousel.next();

  // e.target.classList.contains("btn-start") ? $carousel.next() : "";
}
