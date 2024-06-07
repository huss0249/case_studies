// window.$carousel = "";

const template = document.createElement("template");
template.innerHTML = `
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
        data-bs-target="#carouselID"
        data-bs-slide="prev"
    >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>

    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselID"
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
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
  }

  connectedCallback() {
    const parentID = this.parentElement.parentElement.id;
    console.log("parentID ", parentID);
    // $carousel = document.querySelector(`#${parentID}`);
    console.log(document.querySelector(".carousel").id);
    const myTarget = document.querySelector(".carousel").id;
    const $carousel = new bootstrap.Carousel(`#${myTarget}`);
    $carousel.cycle();

    const btns = this.root.querySelectorAll("button");
    btns.forEach((b) => {
      // b.setAttribute("data-bs-target", `#${this.control}`);
      b.setAttribute("data-bs-target", `#${parentID}`);
      b.addEventListener("click", this.whoClicked);
    });

    // let myCarousel = $bbb;
    console.log("carousel ", $carousel);
  }

  whoClicked(e) {
    let $clickedBtn = e.target.closest("button").getAttribute("data-bs-slide");
    console.log("$clickedBtn = ", $clickedBtn, " | ");
    // const $pp = e.target.parentElement.parentElement.parentElement;


    const myTarget = document.querySelector(".carousel").id;
    const $carousel = new bootstrap.Carousel(`#${myTarget}`);

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
