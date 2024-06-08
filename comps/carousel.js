const template_carousel = document.createElement("template");
template_carousel.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

<style>
    :host{
        /* the shadow root */
        background-color: #333; /* default */
        color: white;
        display: block; /* critical */
        /*
        height: 400px !important;
        */
    }
    .root{
        /*
        position: relative;
        padding: 2rem;
        */
    }
    .carousel-item {
        height: 400px;
    }
</style>
<!--    ==============  -->
<!--    ==============  -->
<!--    ==============  -->
<div class="root">
    <slot name="carousel">Default text if not title slot used in HTML</slot>
</div>
`;

class Carousel extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    // shadowRoot shields the web component from external styling, mostly
    let clone = template_carousel.content.cloneNode(true);
    this.root.append(clone);

    const $parent = this.id;
    console.log($parent);
    // const $carousel = new bootstrap.Carousel(`#${$parent}`, {
    $carousel = new bootstrap.Carousel(`#${$parent}`, {
      interval: 3000,
      touch: false,
      wrap: false,
      keyboard: true,
    });
    // $carousel.nextWhenVisible();
    // $carousel.cycle();
    $carousel.pause();
    // console.log($carousel.from(2));
    // $carousel.from(2);
    // $carousel.to(3);

    console.log($carousel);
    // advanceCarousel($carousel);
  }

  //define the allowed attributes
  /*   static get observedAttributes() {
    return ["character", "color"];
  }
 */
  //
  //sync attributes with properties as you want
  /* get character() {
    return this.getAttribute("character");
  }
  set character(value) {
    this.setAttribute("character", value);
  }

  get color() {
    return this.getAttribute("color");
  }
  set color(value) {
    this.setAttribute("color", value);
  } */
  //
  //handle values and changes to the attributes
  /*
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName.toLowerCase() === "character") {
      const div = this.root.querySelector(".root");
      let p = div.querySelector("p")
        ? div.querySelector("p")
        : document.createElement("p");
      p.className = "character";
      p.textContent = newVal;
      div.append(p);
    }
    console.log(attrName, newVal);
    if (attrName.toLowerCase() === "color") {
      this.style.backgroundColor = newVal;
    }
  }
    */
}

customElements.define("my-carousel", Carousel);
