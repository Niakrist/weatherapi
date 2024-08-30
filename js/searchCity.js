const searcButton = document.querySelector(".search-form__btn");
const searchCityInpit = document.querySelector(".search-form__input");
const searchForm = document.querySelector(".search-form");

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
  searchForm.addEventListener("submit", (e) => {
    if (searchCityInpit.value.length < 1) {
      e.preventDefault();
      searchCityInpit.value = "Поле обязательное для заполнения";
      searchCityInpit.style.color = "red";
      searchForm.style.outline = "1px solid red";
      setTimeout(() => {
        searchCityInpit.value = "";
        searchCityInpit.style.color = "";
        searchForm.style.outline = "";
      }, 500);
    } else {
      e.preventDefault();
      console.log(
        "Отправка формы заблокирована для вывода текста в консоль из первой таски"
      );
      console.log(searchCityInpit.value);
      searchCityInpit.value = "";
      searchCityInpit.blur();
    }
  });
};
