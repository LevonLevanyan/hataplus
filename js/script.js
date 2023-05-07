let hamburger = document.querySelector(".hamburger")
let topMenu = document.querySelector(".topMenu")

hamburger.onclick = function () {
    topMenu.classList.toggle ("active-burger")
  hamburger.classList.toggle ("hamburger-open")
}