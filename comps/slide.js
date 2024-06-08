const template_slide = document.createElement("template");
template_slide.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<style>
    :host{
        /* the shadow root */
        background-color: #333; /* default */
        color: white;
        display: block; /* critical */
        height: 300px;
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

<div class="root carousel-item bg-info d-flex justify-content-center align-items-center">
-->
<div class="root container">
<!--
    <div class="card bg-warning p-5">
        <div class="card-body">
-->
          <slot name="slide"></slot>
            <!--
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">Radio</label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">Radio</label>
            </div>
            -->
<!--
        </div>
    </div>
-->
    </div>
    <!--
<h1>SLIDE</h1>
    <div class="carousel-item bg-info d-flex justify-content-center align-items-center">
        <div class="card">
            <div class="card-body">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">Radio</label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">Radio</label>
                </div>
            </div>
        </div>

    </div>
    </div>
    -->
`;

class Slide extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    // shadowRoot shields the web component from external styling, mostly
    let clone = template_slide.content.cloneNode(true);
    this.root.append(clone);
  }

  //define the allowed attributes
  static get observedAttributes() {
    return ["type", "color"];
  }
  //
  //sync attributes with properties as you want

  get type() {
    return this.getAttribute("type");
  }
  set type(value) {
    this.setAttribute("type", value);
  }

  get color() {
    return this.getAttribute("color");
  }
  set color(value) {
    this.setAttribute("color", value);
  }

  renderIntro() {
    let $startBtn = document.querySelector(".btn-start");
    $startBtn.addEventListener("click", advanceCarouselfromSlide.bind(this));
    // console.log("Rendering intro");
    // document.querySelectorAll("button").forEach((btn) => {
    //   btn.setAttribute("disabled", "disabled");
    //   btn.classList.add("d-none");
    // });
    // hideCarouselPrevBtn();
    // console.log(document.querySelector(".carousel").id);
    // const myTarget = document.querySelector(".carousel").id;
    // const carousel = new bootstrap.Carousel(`#${myTarget}`);
    // carousel.cycle();
    // advanceCarouselfromSlide($carousel);
  }

  connectedCallback() {
    // this.style.background = color;
    // console.log(this.parentElement.parentElement.parentElement.id, this.type);
    // this.type === "intro" ? this.renderIntro() : "";
    // this.type === "intro" ? this.renderIntro() : "";

    switch (this.type) {
      case "intro":
        this.renderIntro();
        break;
      case "mcq":
        // console.log("MC Q");
        break;
      case "ynq":
        // console.log("YN Q");
        break;
      case "tfq":
        // console.log("TF Q");
        break;
      case "conc":
        // console.log("Conclusion");
        break;
      default:
      // console.log("SWITCH CASE");
    }
  }

  //
  //handle values and changes to the attributes

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName.toLowerCase() === "type") {
    }
    // console.log(attrName, newVal);
    if (attrName.toLowerCase() === "color") {
      // this.style.background = newVal;
      this.classList.add(`bg-${newVal}`);
    }
  }
}

customElements.define("my-slide", Slide);
