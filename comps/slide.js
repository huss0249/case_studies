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
        height: 400px;
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
<div class="root">

    <div class="card bg-warning p-5">
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
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
  }

  //define the allowed attributes
  /* static get observedAttributes() {
    return ["character", "color"];
  } */
  //
  //sync attributes with properties as you want
  /*
  get character() {
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
  }
    */
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

customElements.define("my-slide", Slide);