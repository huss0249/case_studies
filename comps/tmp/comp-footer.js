class Footer extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });

    this.root.innerHTML = `<div><slot class ='copyright'></slot></div>`
  }
}

customElements.define('big-foot', Footer);
// <big-foot>