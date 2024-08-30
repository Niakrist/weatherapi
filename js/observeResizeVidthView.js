const logoEl = document.querySelector(".header__logo-img");

const showLogo = () => {
  let widthView = window.innerWidth;
  logoEl.src = widthView > 1023 ? "public/logo-dt.svg" : "public/logo-mob.svg";
};

showLogo();

export const observeResizeVidthView = () => {
  window.addEventListener("resize", () => {
    showLogo();
  });
};
