const buttons = document.querySelectorAll(".categorybtn");
const items = document.querySelectorAll(".product");
const container = document.querySelector(".products4");

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    // Show items of selected category, hide the rest
    items.forEach((item) => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

container.addEventListener("scroll", reveal);
