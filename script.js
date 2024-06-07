function findAncestor(el, cls) {
  console.log(el, cls);
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

function testo(flag) {
  console.log("flag ======> ", flag);
  // findAncestor(flag, "carousel")
}
