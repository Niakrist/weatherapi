import {
  weatherDataFiveDays,
  weatherDataTwentyFourHours,
} from "./mockData/mockWeatherData.js";

export const createWeatherSlider = ({ weather }) => {
  const sliderOneDay = document.querySelector(".weather-slider__list");
  sliderOneDay.textContent = "";

  const createWElemsForSlider = (item) => {
    const oneDayItem = document.createElement("li");
    oneDayItem.className =
      weather === "days" ? "weather-slider__item-day" : "weather-slider__item";
    // oneDayItem.style.minWidth = weather === "days" ? "270px" : "";

    const oneDayTime = document.createElement("div");
    oneDayTime.className = "weather-slider__time";
    if (weather === "days") {
      const dayWeek = document.createElement("span");
      const dayDate = document.createElement("span");
      dayWeek.textContent = item.dayWeek + ", ";
      dayDate.textContent = item.date;
      oneDayTime.append(dayWeek, dayDate);
    } else {
      oneDayTime.textContent = item.time;
    }

    const oneDayImg = document.createElement("img");
    oneDayImg.className = "weather-slider__img";
    oneDayImg.src = item.icon;
    oneDayImg.alt = item.descRu;

    const oneDayTemp = document.createElement("div");
    oneDayTemp.className = "weather-slider__temp";

    if (weather === "days") {
      const minTemp = document.createElement("span");
      const maxTemp = document.createElement("span");
      minTemp.textContent = `от ${item.minTemp}°`;
      maxTemp.textContent = ` до ${item.maxTemp}°`;
      oneDayTemp.append(minTemp, maxTemp);
    } else {
      oneDayTemp.textContent = item.temp + "°";
    }

    oneDayItem.append(oneDayTime, oneDayImg, oneDayTemp);

    return oneDayItem;
  };

  if (weather === "hours") {
    weatherDataTwentyFourHours.forEach((item, index) => {
      sliderOneDay.append(createWElemsForSlider(item, index));
    });
  }

  if (weather === "days") {
    weatherDataFiveDays.forEach((item, index) => {
      sliderOneDay.append(createWElemsForSlider(item, index));
    });
  }

  document
    .querySelector(`[data-weather="${weather}"]`)
    .classList.add("menu-slider__link--active");
};
