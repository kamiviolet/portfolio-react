export const clickMenuItems = (e) => {
  const menuWrapper = document.querySelector(".menu_wrapper");
  const menuBtn = document.querySelector(".menu_btn");

    if (e.target.classList.contains("menu_btn_bar") && menuWrapper.classList.contains("hidden")) {
      menuWrapper.classList.remove("hidden");
      menuBtn.classList.add('open')
    }
    else if (e.target.classList.contains("menu_btn_bar") && !menuWrapper.classList.contains("hidden")) {
      menuWrapper.classList.add("hidden");
      menuBtn.classList.remove('open')
    }
    else if (!menuWrapper.classList.contains("hidden")) {
      menuWrapper.classList.add("hidden");
      menuBtn.classList.remove('open')
    }
}

export const turnBtnToCross = (e) => {
  const menuWrapper = document.querySelector(".menu_wrapper");
  
  if (menuWrapper.classList.contains("show")) {
    e.target.classList.add('open')
  } else {
    e.target.classList.remove('open')
  }
}

export const imageByIndex = (index, images) => images[index % images.length];