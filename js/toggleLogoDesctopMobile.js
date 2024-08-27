const logoEl = document.querySelector(".header__logo-img");
export const toggleLogoDesctopMobile = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      logoEl.src = "../public/logo-dt.svg";
    } else {
      logoEl.src = "../public/logo-mob.svg";
    }
  });
};
