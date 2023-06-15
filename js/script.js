const menuButtons = document.getElementsByClassName("menu-button");

for (menuButton of menuButtons) {
  menuButton.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu.hidden == true) {
      menu.hidden = false;
    } else {
      menu.hidden = true;
    }
  });
}
