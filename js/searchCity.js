const searcButton = document.querySelector(".saerch-form__btn");
const searchCityInpit = document.querySelector(".saerch-form__input");
const saerchForm = document.querySelector(".saerch-form");

export const searchCity = () => {
  searcButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(searchCityInpit.value);
    clearsearchCityInpit();
  });

  // Функция очистки формы по нажатию на крестик
  const clearsearchCityInpit = () => {
    searchCityInpit.value = "";
    searchCityInpit.blur();
    searcButton.classList.add("search");
    searcButton.classList.remove("close");
    searcButton.classList.remove("close-dark");
  };

  // Состояния input в зависимости от focus / blur
  searchCityInpit.addEventListener("focus", (e) => {
    searcButton.classList.remove("search");
    searcButton.classList.add("close");
    searcButton.classList.remove("close-dark");
  });
  searchCityInpit.addEventListener("blur", () => {
    if (searchCityInpit.value.length > 0) {
      searcButton.classList.remove("search");
      searcButton.classList.remove("close");
      searcButton.classList.add("close-dark");
    } else {
      searcButton.classList.add("search");
      searcButton.classList.remove("close");
      searcButton.classList.remove("close-dark");
    }
  });

  // Валидация
  saerchForm.addEventListener("submit", (e) => {
    if (searchCityInpit.value.length < 1) {
      e.preventDefault();
      searchCityInpit.value = "Поле обязательное для заполнения";
      searchCityInpit.style.color = "red";
      saerchForm.style.outline = "1px solid red";
      setTimeout(() => {
        searchCityInpit.value = "";
        searchCityInpit.style.color = "";
        saerchForm.style.outline = "";
      }, 500);
    }
  });
};
