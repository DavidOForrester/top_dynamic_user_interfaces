let clickState = "closed";

const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
  if (clickState == "closed") {
    clickState = "open";
  } else {
    clickState = "closed";
  }
});

menuButton.addEventListener("mouseover", () => {
  menu.hidden = false;
});

menuButton.addEventListener("mouseout", () => {
  if (clickState == "closed") {
    menu.hidden = true;
  }
});
