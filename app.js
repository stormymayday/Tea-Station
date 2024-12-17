//setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
// disabling the submit button
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault()
});

// Selecting nav links
const navLinks = document.querySelectorAll(".nav-link");

// Closing nav when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("showNav");
  });
});