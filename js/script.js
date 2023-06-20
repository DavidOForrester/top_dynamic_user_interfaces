const leftButton = document.getElementById("left-button");

leftButton.addEventListener("click", () => {
    const imagesDiv = document.getElementById("images");

    const imgs = imagesDiv.querySelectorAll("img");
  
    let i = 0;
    let active = 0;
  
    for (img of imgs) {
      if (img.hidden == false) {
        active = i;
      }
      i = i + 1;
    }
  
    imgs[active].hidden = true;
    if (active == 0) {
      imgs[imgs.length - 1].hidden = false;
    } else {
      imgs[active - 1].hidden = false;
    }
});

const rightButton = document.getElementById("right-button");

rightButton.addEventListener("click", () => {
  const imagesDiv = document.getElementById("images");

  const imgs = imagesDiv.querySelectorAll("img");

  let i = 0;
  let active = 0;

  for (img of imgs) {
    if (img.hidden == false) {
      active = i;
    }
    i = i + 1;
  }

  imgs[active].hidden = true;
  if (active == imgs.length - 1) {
    imgs[0].hidden = false;
  } else {
    imgs[active + 1].hidden = false;
  }
});

// Dropdown
/*let clickState = "closed";

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
});*/

// Mobile Dropdown
/*let mobileClickState = "closed";

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu-options")

mobileMenuButton.addEventListener("click", () => {
  if (mobileClickState == "closed") {
    mobileClickState = "open";
  } else {
    mobileClickState = "closed";
  }
});

mobileMenuButton.addEventListener("mouseover", () => {
    mobileMenu.classList.add('show')
});

mobileMenuButton.addEventListener("mouseout", () => {
  if (mobileClickState == "closed") {
    mobileMenu.classList.remove('show')
  }
});*/
