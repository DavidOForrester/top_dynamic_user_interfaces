let clickState = "closed";

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu")

menuButton.addEventListener("click", () => {
  if (clickState == "closed") {
    clickState = "open";
  } else {
    clickState = "closed";
  }
});

menuButton.addEventListener("mouseover", () => {
    menu.classList.add('show')
});

menuButton.addEventListener("mouseout", () => {
  if (clickState == "closed") {
    menu.classList.remove('show')
  }
});
