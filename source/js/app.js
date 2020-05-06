var mainNav =  document.querySelector(".main-nav");
mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--clsd");

var mainNavTogl = document.querySelector(".main-nav__togl");

mainNavTogl.addEventListener("click", function(evt) {
  mainNav.classList.toggle("main-nav--clsd");
})
