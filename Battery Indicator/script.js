document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  const section = document.querySelector("section");

  toggle.addEventListener("click", () => {
    section.classList.toggle("dark");
  });
});
