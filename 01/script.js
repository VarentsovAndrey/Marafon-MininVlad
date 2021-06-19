const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    classRemove();
    slide.classList.add("active");
  });
});

function classRemove() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
