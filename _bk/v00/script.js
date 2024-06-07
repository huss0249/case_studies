// let $check = document.querySelector("#test");
// let $bbb = document.querySelector("#carouselb");
// let myCarousel = $bbb;
// const clickedIt = (e) => {
//   console.log(e.target);
//   // $bbb.carousel("next");
//   // $bbb.slide("next");
//   // $bbb.next();

//   // Get carousel element

//   // Activate Carousel
//   new bootstrap.Carousel(myCarousel);

//   // // Enable Carousel Indicators
//   // let carouselItems = document.querySelectorAll(".carousel-item");
//   // carouselItems.forEach(function (item, index) {
//   //   item.addEventListener("click", function () {
//   //     new bootstrap.Carousel(myCarousel).to(index);
//   //   });
//   // });

//   // Pause the carousel when the mouse is over it
//   // myCarousel.addEventListener("mouseenter", function () {
//   //   new bootstrap.Carousel(myCarousel).pause();
//   // });

//   // myCarousel.addEventListener("mouseleave", function () {
//   //   new bootstrap.Carousel(myCarousel).cycle();
//   // });

//   // new bootstrap.Carousel(myCarousel).cycle();
//   // new bootstrap.Carousel(myCarousel).next();
//   new bootstrap.Carousel(myCarousel).prev();

//   console.log("clicked");
// };
// $check.addEventListener("click", clickedIt);

// console.log($check);
// console.log($bbb);

// function whoClicked(e) {
//   console.log("FROM SCRIPT");
//   let $clickedBtn = e.target.closest("button").getAttribute("data-bs-slide");
//   console.log(
//     "$clickedBtn = ",
//     $clickedBtn,
//     " | ",
//     this.parentElement.parentElement.id
//   );
//   // const $pp = e.target.parentElement.parentElement.parentElement;

//   // $clickedBtn === "next" ? carousel.next() : "";
//   // $clickedBtn === "prev" ? carousel.prev() : "";
//   $clickedBtn === "next" ? $carousel.next() : "";
//   $clickedBtn === "prev" ? $carousel.prev() : "";
//   // $clickedBtn === "next" ? $pp.next() : "";
//   // $clickedBtn === "prev" ? $pp.prev() : "";
//   //   this.carousel.next();
// }
