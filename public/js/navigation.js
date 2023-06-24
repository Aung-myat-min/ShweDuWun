const toggleButton = document.getElementById("toggleButton");
const navLinks = document.querySelector(".hidden");

toggleButton.addEventListener("click", () => {
  if (navLinks.classList.contains("hidden")) {
    navLinks.setAttribute("class", "show");
  } else {
    navLinks.setAttribute("class", "hidden");
  }
});
