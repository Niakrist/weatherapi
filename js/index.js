import { createCardWeatherData } from "./createCardWeatherData.js";
import { createWeatherSlider } from "./createWeatherSlider.js";
import { weatherDataObject } from "./mockData/mockWeatherData.js";
import { searchCity } from "./searchCity.js";
import { toggleLogoDesctopMobile } from "./toggleLogoDesctopMobile.js";

const menuSliderList = document.querySelector(".menu-slider__list");
const menuSliderLinks = document.querySelectorAll(".menu-slider__link");

const weatherTodaytodayDetailsList = document.querySelector(
  ".weather-today__details"
);

// Поиска города
searchCity();

// Создания карточек метеоданных
const createBoardWeatherData = (weatherDataObject) => {
  return Object.keys(weatherDataObject).map((data, index) => {
    return createCardWeatherData(data, index);
  });
};
weatherTodaytodayDetailsList.append(
  ...createBoardWeatherData(weatherDataObject)
);

// Первичное создания слайдера с прогнозом «на 24 часа»
createWeatherSlider({ weather: "hours" });

// Обработка клика по ссылкам для отображния слайдера
menuSliderList.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("menu-slider__link")) {
    menuSliderLinks.forEach((menuSliderLink) => {
      menuSliderLink.classList.remove("menu-slider__link--active");
      // Функции для создания слайдера «на 24 часа» или «на 5 дней» в зависимости от переданного дата атрибута
      createWeatherSlider(e.target.dataset);
    });
  }
});

toggleLogoDesctopMobile();
const el = document.querySelector(".details-item__range");
console.log(el);
