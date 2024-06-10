let $carousel = "";

function findAncestor(el, cls) {
  // console.log(el, cls);
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
  let $myTarget = e.target;
  // console.log(
  //   e.target.offsetParent.parentElement.offsetParent.parentElement.offsetParent
  // );

  // console.log("my clicked target is ", $myTarget);
  let yyy = findAncestor($myTarget, "carousel");
  console.log("YYYYYY ", yyy);

  // console.log(document.querySelectorAll(".carousel")[0]);

  $carousel = new bootstrap.Carousel(yyy);
  // console.log($carousel);

  // $carousel.next();
  $myTarget.classList.contains("btn-start") ? $carousel.next() : "";
  $myTarget.classList.contains("btn-next") ? $carousel.next() : "";
  $myTarget.classList.contains("btn-back") ? $carousel.prev() : "";
  $myTarget.classList.contains("btn-submit") ? $carousel.next() : "";
  $myTarget.classList.contains("btn-exit") ? $carousel.cycle() : "";
}
