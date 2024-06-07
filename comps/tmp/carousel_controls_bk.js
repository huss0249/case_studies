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

  //define the allowed attributes
  static get observedAttributes() {
    return ["control", "color"];
  }

  //sync attributes with properties as you want
  get control() {
    return this.getAttribute("control");
  }
  set control(value) {
    this.setAttribute("control", value);
  }

  get color() {
    return this.getAttribute("color");
  }
  set color(value) {
    this.setAttribute("color", value);
  }

  /*
  handle values and changes to the attributes
  */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName.toLowerCase() === "control") {
      const btns = this.root.querySelectorAll("button");
      btns.forEach((b) => {
        b.setAttribute("data-bs-target", `#${newVal}`);
      });
    }

    if (attrName.toLowerCase() === "color") {
      this.style.backgroundColor = newVal;
    }
  }

  clickedIt(e) {
    console.log(e.target);

    // Activate Carousel
    new bootstrap.Carousel(myCarousel);

    // new bootstrap.Carousel(myCarousel).cycle();
    // new bootstrap.Carousel(myCarousel).next();
    new bootstrap.Carousel(myCarousel).prev();

    console.log("clicked");
  }

  connectedCallback() {
    console.log("THIS ", this.parentElement.parentElement.id);
    if (this.control) {
      const btns = this.root.querySelectorAll("button");
      btns.forEach((b) => {
        b.setAttribute("data-bs-target", `#${this.control}`);
      });

      // let $bbb = document.querySelector("#carouselb");
      let $bbb = document.querySelector(`#${this.control}`);

      let myCarousel = $bbb;
      console.log("myCarousel ", myCarousel);

      this.root
        .querySelector(".carousel-control-prev")
        .addEventListener("click", clickedIt);

      // console.log($check);
      console.log($bbb);
    }
    // window.wcUID++;
    // // console.log(this.cat)
    // if (this.cat === "acc") {
    //   this.makeAccordions(`ex${this.cat}`);
    // } else if (this.cat === "tab") {
    //   this.makeTabs(`ex${this.cat}`);
    // } else if (this.cat === "pill") {
    //   this.makePillTabs(`ex${this.cat}`);
    // } else if (this.cat === "horizontal") {
    //   this.makeHorizontalTabs(`ex${this.cat}`);
    // }
    // this.wc_title();
    // this.wc_content();
    // this.makeAccordion()

    // return;
  }

  //
  //handle values and changes to the attributes
  /*
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName.toLowerCase() === "control") {
      const div = this.root.querySelector(".root");
      let p = div.querySelector("p")
        ? div.querySelector("p")
        : document.createElement("p");
      p.className = "control";
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

customElements.define("my-controls", Controls);
