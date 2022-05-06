const hamburger = document.querySelector(".navbar__hamburger__menu");
const hamburgerLink = document.querySelector(".navbar__hamburger__link");
const img = hamburgerLink.firstElementChild;
const list = document.querySelector(".navbar__list");
img.addEventListener("click", openClose);

function openClose(event) {
  let theImg = event.target;
  let mySrc = theImg.getAttribute("src");
  if (mySrc === "images/icon-hamburger.svg") {
    theImg.setAttribute("src", "images/icon-close.svg");
    list.classList.add("show");
  } else {
    theImg.setAttribute("src", "images/icon-hamburger.svg");
    list.classList.remove("show");
  }
  // event.preventDefault();
}
