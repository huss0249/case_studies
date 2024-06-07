const template = document.createElement("template");
template.innerHTML = `
<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>


<div class='root'>
  <h1>WC Name</h1>
  <div class='content'>
    <slot name = 'content'></slot>
  </div>
</div>
`;

class customComp extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
  }

  static get observedAttributes() {
    return ["cat", "color", "action"];
  }

  /*
    sync attributes with properties as you want
    */
  get cat() {return this.getAttribute("cat")}
  get color() {return this.getAttribute("color")}
  get action() {return this.getAttribute("action")}

  set cat(value) {this.setAttribute("cat", value)}
  set color(value) {this.setAttribute("color", value)}
  set action(value) {this.setAttribute("action", value)}

  /*
    handle values and changes to the attributes
    */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName.toLowerCase() === "cat") {
      const div = this.root.querySelector(".root");
      let p = div.querySelector("p")
        ? div.querySelector("p")
        : document.createElement("p");
      p.className = "cat";
      p.textContent = newVal;
      //   div.append(p);
      div.prepend(p);
    }
    // console.log(attrName, newVal);
    if (attrName.toLowerCase() === "color") {
      this.style.backgroundColor = newVal;
    }
  }

  connectedCallback() {
    window.wcUID++
    // console.log(this.cat)
    if (this.cat === "acc") {
      this.makeAccordions(`ex${this.cat}`);
    } else if (this.cat === "tab") {
      this.makeTabs(`ex${this.cat}`);
    } else if (this.cat === "pill") {
      this.makePillTabs(`ex${this.cat}`);
    } else if (this.cat === "horizontal") {
      this.makeHorizontalTabs(`ex${this.cat}`);
    }
    this.wc_title();
    this.wc_content();
    // this.makeAccordion()

    // return;
  }

  wc_title() {
    let $title = this.root.querySelector("h1");
    // this.id === "uuu" ? window.$abc(this.id) : window.$xyz(this.id);
    $title.textContent = `${this.id} | ${this.cat} | ${this.color} | ${
      this.action
    } | ${this.parentElement.parentElement.classList.contains("part")}`;
    $title.classList.add("text-dark", "bg-warning", "fs-6");
    return;
  }

  wc_content() {
    this.$content = this.root.querySelector("div slot");
    // console.log('this.$content = ', this.$content)
    // let $contentHTML = $content.assignedElements()[0]
    this.$contentHTML = this.$content.assignedElements()[0];
    // console.log($contentHTML.children[0])
    // this.makeAccordion($contentHTML.children[0])
    // this.makeAccordion(this.$contentHTML)
    // this.makeAccordion()
    // this.makeAccordions("exacc", "div");
  }

  // makeAccordion(targetSelector, selectorSection) {
  makeAccordions(flag) {

    const div = this.root.querySelector(".root");
    let p = div.querySelector("p")
      ? div.querySelector("p")
      : document.createElement("p");
    p.className = "cat";
    p.textContent = 'dddd';
    //   div.append(p);
    div.prepend(p);
    // div.appendChild(p);


    // console.log("Accordions FN called");

    // this.$content = this.root.querySelector("div slot").assignedElements()[0];
    this.$content = this.root.querySelector("div slot").assignedElements()[0];
    // console.log('this.$content', this.$content.children)

    let targetSelector = 'div'
    let boxes = this.$content.children
    // console.log(boxes)
    Array.from(boxes).forEach(($acc, idx) => {
      console.log("BOX ", $acc.parentElement)
      // console.log(window.wcUID)
      $acc.id = `${targetSelector}${idx}`;
      // console.log(idx, " : ", box)
      let $accs = $acc.querySelectorAll('div');
      // console.log($accs)


      let df = new DocumentFragment();
      
      // LOOP
      $accs.forEach((AccEl, iddx) => {
        let accItem = document.createElement("div");
        accItem.classList.add("accordion-item");
        let accBtn = document.createElement("button");
        accBtn.type = "button";
        accBtn.classList.add("accordion-button", "collapsed", "mt-3");
        accBtn.setAttribute("data-bs-toggle", "collapse");
        accBtn.setAttribute(
          "data-bs-target",
          `#${targetSelector}${idx}-collapse_${iddx}`
        );
        accBtn.setAttribute("aria-expanded", "false");
        accBtn.setAttribute(
          "aria-controls",
          `${targetSelector}${idx}-collapse_${iddx}`
        );
  
        let accCollapse = document.createElement("div");
        accCollapse.id = `${targetSelector}${idx}-collapse_${iddx}`;
        accCollapse.classList.add("accordion-collapse", "collapse", "d-shadow");
        accCollapse.setAttribute("data-bs-parent", `#${targetSelector}${idx}`);
  
        let accHeader = AccEl.querySelector("h2");
        accHeader.classList.add("accordion-header");
        accBtn.textContent = accHeader.textContent;
        accHeader.innerHTML = "";
        accHeader.appendChild(accBtn);
        accItem.appendChild(accHeader);
  
        let accBody = AccEl;
        accBody.classList.add("accordion-body", "rounded", "rounded-5");
        accCollapse.appendChild(accBody);
        accItem.appendChild(accCollapse);
        df.appendChild(accItem);
        $acc.appendChild(df);
        $acc.classList.add("accordion", "accordion-flush", "pb-3");
      });
      
      return $acc;
    });
    // console.log("flag = ", flag);
    // console.log("$contentHTML = ", this.$contentHTML);
    /*
      let targetSelector = 'exacc'
      let selectorSection = 'div'
        // let boxes = document.querySelectorAll(".part");
        // let boxes = this.root.querySelectorAll(".part");
        // console.log(boxes)
        // boxes.forEach((box, idx) => {
          let $acc = this.root.querySelector(`.${targetSelector}`);
          // $acc.id = `${targetSelector}${idx}`;
          $acc.id = `${targetSelector}`;
          let $accs = $acc.querySelectorAll(selectorSection);
      
          let df = new DocumentFragment();
      
          // LOOP
          $accs.forEach((AccEl, iddx) => {
            let accItem = document.createElement("div");
            accItem.classList.add("accordion-item");
            let accBtn = document.createElement("button");
            accBtn.type = "button";
            accBtn.classList.add("accordion-button", "collapsed", "mt-3");
            accBtn.setAttribute("data-bs-toggle", "collapse");
            accBtn.setAttribute(
              "data-bs-target",
              `#${targetSelector}${idx}-collapse_${iddx}`
            );
            accBtn.setAttribute("aria-expanded", "false");
            accBtn.setAttribute(
              "aria-controls",
              `${targetSelector}${idx}-collapse_${iddx}`
            );
      
            let accCollapse = document.createElement("div");
            accCollapse.id = `${targetSelector}${idx}-collapse_${iddx}`;
            accCollapse.classList.add("accordion-collapse", "collapse", "d-shadow");
            accCollapse.setAttribute("data-bs-parent", `#${targetSelector}${idx}`);
      
            let accHeader = AccEl.querySelector("h2");
            accHeader.classList.add("accordion-header");
            accBtn.textContent = accHeader.textContent;
            accHeader.innerHTML = "";
            accHeader.appendChild(accBtn);
            accItem.appendChild(accHeader);
      
            let accBody = AccEl;
            accBody.classList.add("accordion-body", "rounded", "rounded-5");
            accCollapse.appendChild(accBody);
            accItem.appendChild(accCollapse);
            df.appendChild(accItem);
            $acc.appendChild(df);
            $acc.classList.add("accordion", "accordion-flush", "pb-3");
          });
          
          return $acc;
          */
    // });
  }

  makeTabs(flag) {
    console.log("Tabs FN called");
  }

  makePillTabs(flag) {
    console.log("Pills FN called");
  }

  makeHorizontalTabs(flag) {
    console.log("HorizontalTabs FN called");
  }
}
customElements.define("bs-interactive", customComp);
