const accordionEls = document.querySelectorAll(".accordion");

for (const accordion of accordionEls) {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
