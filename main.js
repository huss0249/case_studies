// import "/comps/bs-interactive.js";
/* ============================================================ */
/* ============================================================ */
function includeCallback() {
    // console.log('callback fn called')
}

function includeHTML(cb) {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            elmnt.removeAttribute("include-html");
            includeHTML(cb);
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
    if (cb) cb();
  };
  includeHTML(includeCallback)
/* ============================================================ */
/* ============================================================ */
function $abc(flag) {
  console.log(flag);

  // if (flag === "eee") {
  let $as = document.querySelectorAll("bs-interactive");

  $as.forEach(($a, index) => {
    // console.log($a.querySelector(".exacc").children[0]);

    if ($a.id === "uuu") {
      let $b = $a.querySelector(".exacc");
      $b.innerHTML = `
                <h1>TTT</h1>
                `;
      // const $text = document.createElement("h3");
      // $text.textContent = "EEEE";
      // console.log($text.textContent);

      // // $a.textContent = $text.textContent;
      // $a.appendChild($text);
      // }
    }
  });
  return;
}
/* ============================================================ */

function $xyz(flag) {
  console.log(flag);

  // if (flag === "eee") {
  let $as = document.querySelectorAll("bs-interactive");
  // console.log($as.attributes);

  $as.forEach(($a, index) => {
    // console.log($a.querySelector(".exacc").children[0]);

    if ($a.id === "eee") {
      let $b = $a.querySelector(".exacc");
      $b.innerHTML = `
                    <h1>XYZ</h1>
                    `;
      // const $text = document.createElement("h3");
      // $text.textContent = "EEEE";
      // console.log($text.textContent);

      // // $a.textContent = $text.textContent;
      // $a.appendChild($text);
      // }
    }
  });
  return;
}

/* ============================================================ */
const makeHorizontalTabs = (targetSelector, selectorSection) => {
    let boxes = document.querySelectorAll(".part");
    boxes.forEach((box, idx) => {
      let $tab = box.querySelector(`.${targetSelector}`);
      let $tabs = $tab.querySelectorAll(selectorSection);
      let $nav = document.createElement("nav");
      let navTabs = document.createElement("div");
      navTabs.classList.add("nav", "nav-tabs");
      navTabs.id = "nav-tab";
      navTabs.role = "tablist";
      let tabContent = document.createElement("div");
      tabContent.id = "nav-tabContent";
      tabContent.classList.add("tab-content");
  
      let df = new DocumentFragment();
      // LOOP
      $tabs.forEach((TabEl, iddx) => {
        // create Elements
        let tabBtn = document.createElement("button");
        tabBtn.type = "button";
        tabBtn.role = "tab";
        // tabBtn.id = `#${targetSelector}-tab_${i}`;
  
        if (iddx === 0) {
          tabBtn.classList.add("nav-link", "active");
          tabBtn.setAttribute("aria-selected", "true");
        } else {
          tabBtn.classList.add("nav-link");
          tabBtn.setAttribute("aria-selected", "false");
        }
  
        tabBtn.setAttribute("data-bs-toggle", "tab");
        tabBtn.setAttribute(
          "data-bs-target",
          `#${targetSelector}${idx}-tab_${iddx}`
        );
        tabBtn.setAttribute(
          "aria-controls",
          `${targetSelector}${idx}-tab_${iddx}`
        );
        tabBtn.textContent = TabEl.querySelector("h2").textContent;
  
        navTabs.appendChild(tabBtn);
        let tabPane = document.createElement("div");
        tabPane.id = `${targetSelector}${idx}-tab_${iddx}`;
  
        iddx === 0
          ? tabPane.classList.add("tab-pane", "fade", "show", "active")
          : tabPane.classList.add("tab-pane", "fade");
  
        tabPane.role = "tabpanel";
        tabPane.setAttribute(
          "aria-labelledby",
          `${targetSelector}${idx}-tab_${iddx}`
        );
        tabPane.tabindex = 0;
        tabPane.appendChild(TabEl);
        tabContent.appendChild(tabPane);
      });
      $nav.appendChild(navTabs);
      df.appendChild($nav);
      df.appendChild(tabContent);
      $tab.appendChild(df);
  
      return $tab;
    });
  };
  
/* ============================================================ */
const makePillTabs = (targetSelector, selectorSection) => {
    const boxes = document.querySelectorAll(".part");
    boxes.forEach((box, idx) => {
      let $tab = box.querySelector(`.${targetSelector}`);
      let $tabs = $tab.querySelectorAll(selectorSection);
      let $nav = document.createElement("ul");
  
      $nav.classList.add("nav", "nav-pills", "mb-3");
      $nav.id = "pills-tab";
      $nav.role = "tablist";
  
      let tabContent = document.createElement("div");
      tabContent.id = "pills-tabContent";
      tabContent.classList.add("tab-content");
  
      let df = new DocumentFragment();
  
      // LOOP
      $tabs.forEach((TabEl, iddx) => {
        let navTabs = document.createElement("li");
        navTabs.classList.add("nav-item");
        navTabs.id = "nav-tab";
        navTabs.role = "presentation";
  
        // create Elements
        let tabBtn = document.createElement("button");
        tabBtn.type = "button";
        tabBtn.role = "tab";
        tabBtn.id = `#${targetSelector}${idx}-tab_${iddx}`;
  
        if (iddx === 0) {
          tabBtn.classList.add("nav-link", "active");
          tabBtn.setAttribute("aria-selected", "true");
        } else {
          tabBtn.classList.add("nav-link");
          tabBtn.setAttribute("aria-selected", "false");
        }
  
        tabBtn.setAttribute("data-bs-toggle", "tab");
        tabBtn.setAttribute(
          "data-bs-target",
          `#${targetSelector}${idx}-tab_${iddx}`
        );
        tabBtn.setAttribute(
          "aria-controls",
          `${targetSelector}${idx}-tab_${iddx}`
        );
        tabBtn.textContent = TabEl.querySelector("h2").textContent;
  
        navTabs.appendChild(tabBtn);
  
        let tabPane = document.createElement("div");
        tabPane.id = `${targetSelector}${idx}-tab_${iddx}`;
  
        iddx === 0
          ? tabPane.classList.add("tab-pane", "fade", "show", "active")
          : tabPane.classList.add("tab-pane", "fade");
        tabPane.role = "tabpanel";
        tabPane.setAttribute(
          "aria-labelledby",
          `${targetSelector}${idx}-tab_${iddx}`
        );
        tabPane.tabindex = 0;
        tabPane.appendChild(TabEl);
        tabContent.appendChild(tabPane);
        $nav.appendChild(navTabs);
      });
      df.appendChild($nav);
      df.appendChild(tabContent);
      $tab.appendChild(df);
  
      return $tab;
    });
  };
/* ============================================================ */

const makeTabs = (targetSelector, selectorSection) => {
    let boxes = document.querySelectorAll(".part");
  
    boxes.forEach((box, idx) => {
      let $tab = box.querySelector(`.${targetSelector}`);
      $tab.id = `${targetSelector}${idx}`;
  
      let $tabs = $tab.querySelectorAll(selectorSection);
      $tab.classList.add("d-flex", "align-items-start");
  
      let navTabs = document.createElement("div");
      navTabs.classList.add(
        "nav",
        "col-5",
        "flex-column",
        "nav-pills",
        "me-3",
        "nav-fill",
        "p-3"
      );
      navTabs.id = "v-pills-tab";
      navTabs.role = "tablist";
      navTabs.setAttribute("aria-orientation", "vertical");
  
      let tabContent = document.createElement("div");
      tabContent.id = "nav-tabContent";
      tabContent.classList.add("tab-content");
  
      // LOOP
      $tabs.forEach((TabEl, iddx) => {
        let df = new DocumentFragment();
        let tabBtn = document.createElement("button");
  
        tabBtn.type = "button";
        tabBtn.role = "tab";
        tabBtn.id = `#${targetSelector}${idx}-tab_${iddx}`;
  
        // accCollapse.id = `${targetSelector}${idx}-collapse_${iddx}`;
  
        if (iddx === 0) {
          tabBtn.classList.add(
            "nav-link",
            "active",
            "text-start",
            "nav-fill",
            "p-3"
          );
          tabBtn.setAttribute("aria-selected", "true");
        } else {
          tabBtn.classList.add("nav-link", "text-start", "nav-fill", "p-3");
          tabBtn.setAttribute("aria-selected", "false");
        }
  
        tabBtn.setAttribute("data-bs-toggle", "tab");
        tabBtn.setAttribute(
          "data-bs-target",
          `#${targetSelector}${idx}-tab_${iddx}`
        );
        tabBtn.setAttribute(
          "aria-controls",
          `${targetSelector}${idx}-tab_${iddx}`
        );
        tabBtn.textContent = TabEl.querySelector("h2").textContent;
  
        navTabs.appendChild(tabBtn);
        let tabPane = document.createElement("div");
        tabPane.id = `${targetSelector}${idx}-tab_${iddx}`;
  
        iddx === 0
          ? tabPane.classList.add("tab-pane", "fade", "show", "active")
          : tabPane.classList.add("tab-pane", "fade");
        tabPane.role = "tabpanel";
        tabPane.setAttribute(
          "aria-labelledby",
          `${targetSelector}${idx}-tab_${iddx}`
        );
        tabPane.tabindex = 0;
        tabPane.appendChild(TabEl);
        tabContent.appendChild(tabPane);
        df.appendChild(navTabs);
        df.appendChild(tabContent);
        $tab.appendChild(df);
      });
      return $tab;
    });
  };
  
  
/* ============================================================ */
function makeAccordion(targetSelector, selectorSection) {
    let boxes = document.querySelectorAll(".part");
    boxes.forEach((box, idx) => {
      let $acc = box.querySelector(`.${targetSelector}`);
      $acc.id = `${targetSelector}${idx}`;
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
    });
  }
/* ============================================================ */
//   makeAccordion("exacc", "div");
  // makeTabs("exacc", "div");
  // makePillTabs("exacc", "div");
//   makeHorizontalTabs("exacc", "div");
  
  /*
    makeAccordion("exacc", "div");
    makeTabs("extabs", "div");
    makePillTabs("expills", "div");
    makeHorizontalTabs("exhtabs", "div");
    */
