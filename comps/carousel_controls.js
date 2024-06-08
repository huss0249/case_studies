const template_controls = document.createElement("template");
template_controls.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<style>
    :host{
        /* the shadow root */
        background-color: #333; /* default */
        color: white;
        display: block; /* critical */
        /*height: 300px;*/
    }
    .root{
        /*
        position: relative;
        padding: 2rem;
        */
    }
</style>
<!--    ==============  -->
<!--    ==============  -->
<!--    ==============  -->
<!--
-->
<div class="root">

    <button
        class="carousel-control-prev"
        type="button"
        data-bs-slide="prev"
    >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>

    <button
        class="carousel-control-next"
        type="button"
        data-bs-slide="next"
    >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>

</div>
`;

class Controls extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    // shadowRoot shields the web component from external styling, mostly
    let clone = template_controls.content.cloneNode(true);
    this.root.append(clone);

    // testo(this.offsetParent.closest(".carousel"));
    // testo(this.offsetParent);
    // console.log(this.offsetParent);

    /*
    const $parent = this.offsetParent.id;
    console.log("this.parent = = = = ", $parent);

    const $btnNext = this.root.querySelector(".carousel-control-next");
    const $btnPrev = this.root.querySelector(".carousel-control-prev");
    console.log($btnNext, $btnPrev);
    $btnNext.setAttribute("data-bs-target", `#${$parent}`);
    $btnPrev.setAttribute("data-bs-target", `#${$parent}`);
    */
  }

  connectedCallback() {
    const $parent = this.offsetParent.id;
    const $carousel = new bootstrap.Carousel(`#${$parent}`, {
      interval: 2000,
      touch: false,
      wrap: false,
      keyboard: true,
    });
    $carousel.pause();

    const $btnNext = this.root.querySelector(".carousel-control-next");
    const $btnPrev = this.root.querySelector(".carousel-control-prev");

    // $btnNext.setAttribute("data-bs-target", `#${$parent}`);
    // $btnPrev.setAttribute("data-bs-target", `#${$parent}`);

    $btnNext.addEventListener("click", () => {
      $carousel.next();
    });
    $btnPrev.addEventListener("click", () => {
      $carousel.prev();
    });

    // const $btnNext = this.root.querySelector(".carousel-control-next");
    // const $btnPrev = this.root.querySelector(".carousel-control-prev");
    // console.log($btnNext, $btnPrev);
    // $btnNext.addEventListener("click", this.clicked);
    // $btnPrev.addEventListener("click", this.clicked);
    // const parentID = this.parentElement.parentElement.id;
    // const parentID = this.parentElement.id;
    // console.log("parentID ", parentID);
    // // $carousel = document.querySelector(`#${parentID}`);
    // console.log(document.querySelector(".carousel").id);
    // const myTarget = document.querySelector(".carousel").id;
    // const $carousel = new bootstrap.Carousel(`#${myTarget}`);
    // $carousel.cycle();
    // const btns = this.root.querySelectorAll("button");
    // btns.forEach((b) => {
    //   // b.setAttribute("data-bs-target", `#${this.control}`);
    //   b.setAttribute("data-bs-target", `#${parentID}`);
    //   b.addEventListener("click", this.whoClicked);
    // });
    // // let myCarousel = $bbb;
    // console.log("carousel ", $carousel);
  }

  // findAncestor(el, cls) {
  //   while ((el = el.parentElement) && !el.classList.contains(cls));
  //   return el;
  // }

  clicked(e) {
    console.log("CLICKED > ", e.target.closest("button"));
    let myBtn = e.target.closest("button");
    // let $parentCarousel = window[test];
    // console.log("$parentCarousel = ", $parentCarousel);
  }

  whoClicked(e) {
    console.log(e.target.parentElement);
    let $clickedBtn = e.target.closest("button").getAttribute("data-bs-slide");
    console.log("$clickedBtn = ", $clickedBtn, " | ");
    // const $pp = e.target.parentElement.parentElement.parentElement;

    let myTarget = document.querySelector(".carousel").id;
    console.log(
      "WHO CLICKED ",
      myTarget,
      " | ",
      this.parentElement.offsetParent,
      " | ",
      this.offsetParent
    );
    let $carousel = new bootstrap.Carousel(`#${myTarget}`);

    // $clickedBtn === "next" ? carousel.next() : "";
    // $clickedBtn === "prev" ? carousel.prev() : "";
    $clickedBtn === "next" ? $carousel.next() : "";
    $clickedBtn === "prev" ? $carousel.prev() : "";
    // $clickedBtn === "next" ? $pp.next() : "";
    // $clickedBtn === "prev" ? $pp.prev() : "";
    // $carousel.next();
  }
}

customElements.define("my-controls", Controls);
