document.addEventListener("DOMContentLoaded", () => {
  const bookmarkButtons = document.querySelectorAll(".bookmark");

  bookmarkButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("bookmark--active");

      const svg = button.querySelector("svg");
      if (button.classList.contains("bookmark--active")) {
        svg.setAttribute("fill", "white");
      } else {
        svg.setAttribute("fill", "rgb(255, 115, 64)");
        svg.setAttribute("stroke", "rgb(255, 115, 64)");
      }
    });
  });
});
