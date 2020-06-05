function openMenu() {
  var menu = document.getElementById("links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// slightly modified. as seen on https://css-tricks.com/animate-text-on-scroll/

const textPath = document.querySelector("#first-review");
const secondTextPath = document.querySelector("#second-review");

const h = document.documentElement,
  b = document.body,
  st = "scrollTop",
  sh = "scrollHeight";

document.addEventListener("scroll", e => {
  let percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  textPath.setAttribute("startOffset", -percent * 40 + 2700);
  secondTextPath.setAttribute("startOffset", -percent * 40 + 3200);
});
