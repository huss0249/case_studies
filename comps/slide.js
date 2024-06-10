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
    .root{}
</style>
<!--    ==============  -->
<!--    ==============  -->
<!--    ==============  -->
<div class="root container">
  <slot name="slide"></slot>
</div>
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

  configControls() {
    console.log("configControls");
    let $startBtn = document.querySelector(".btn-start");
    let $nextBtn = document.querySelector(".btn-next");
    let $backBtn = document.querySelector(".btn-back");
    let $submitBtn = document.querySelector(".btn-submit");
    let $exitBtn = document.querySelector(".btn-exit");

    $startBtn
      ? $startBtn.addEventListener("click", advanceCarouselfromSlide)
      : "";

    $nextBtn
      ? $nextBtn.addEventListener("click", advanceCarouselfromSlide)
      : "";
    $backBtn
      ? $backBtn.addEventListener("click", advanceCarouselfromSlide)
      : "";

    $submitBtn
      ? $submitBtn.addEventListener("click", advanceCarouselfromSlide)
      : "";
    $exitBtn
      ? $exitBtn.addEventListener("click", advanceCarouselfromSlide)
      : "";
  }

  callroot() {
    advanceCarouselfromSlide();
  }

  renderIntro() {
    // let $startBtn = document.querySelector(".btn-start");
    // $startBtn.addEventListener("click", advanceCarouselfromSlide);
  }

  renderSubmit() {
    // let $submitBtn = document.querySelector(".btn-submit");
    // $submitBtn.addEventListener("click", advanceCarouselfromSlide);
    // let $backBtn = document.querySelector(".btn-back");
    // $backBtn.addEventListener("click", advanceCarouselfromSlide);
  }

  connectedCallback() {
    this.configControls();
    switch (this.type) {
      case "intro":
        this.renderIntro();
        break;
      case "mcq":
        this.renderSubmit();
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