import "./main.css";
import WebGL from "./webgl";

const root = document.documentElement;
root.dataset.booted = "false";

WebGL();

function onScroll() {
  if (window.scrollY > 10) root.dataset.scroll = "true";
  else root.dataset.scroll = "false";
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
