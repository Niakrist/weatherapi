import { weatherDataObject } from "./mockData/mockWeatherData.js";

const setPositionRound = (min, max, val) => {
  const onePercent = (Number(max) - Number(min)) / 100;
  const interval = Number(val) - Number(min);
  return interval / onePercent;
};

// Функции для создания карточки метеоданных
export const createCardWeatherData = (data, index) => {
  const detailsItem = document.createElement("li");
  detailsItem.className = "details__item details-item";

  const detailsItemInfoall = document.createElement("div");
  detailsItemInfoall.className = "details-item__info-all";

  const detailsItemTitle = document.createElement("h3");
  detailsItemTitle.className = "details-item__title";
  detailsItemTitle.textContent = weatherDataObject[data].name;

  const detailsItemImg = document.createElement("img");
  detailsItemImg.src = weatherDataObject[data].icon;
  detailsItemImg.alt = weatherDataObject[data].name;

  const detailsItemValue = document.createElement("div");
  detailsItemValue.className = "details-item__value";
  detailsItemValue.textContent =
    weatherDataObject[data].value + " " + weatherDataObject[data].designation;

  const detailsItemInfoCustom = document.createElement("div");
  detailsItemInfoCustom.className = "details-item__info-custom";

  const detailsItemDesc = document.createElement("div");
  detailsItemDesc.className = "details-item__desc";

  if (weatherDataObject[data].info) {
    detailsItemDesc.textContent = weatherDataObject[data].info;
    detailsItemInfoCustom.append(detailsItemDesc);

    if (weatherDataObject[data].changeTime) {
      const detailsItemChangeTime = document.createElement("span");
      detailsItemChangeTime.textContent = weatherDataObject[data].changeTime;
      detailsItemDesc.append(detailsItemChangeTime);
    }
  }

  if (weatherDataObject[data].max) {
    const position = setPositionRound(
      weatherDataObject[data].min,
      weatherDataObject[data].max,
      weatherDataObject[data].value
    );

    const detailsItemRange = document.createElement("div");
    detailsItemRange.className = "details-item__range";
    detailsItemRange.dataset.min = weatherDataObject[data].min;
    detailsItemRange.dataset.max = weatherDataObject[data].max;
    detailsItemRange.value = weatherDataObject[data].value;
    detailsItemRange.style.cssText =
      index % 2 === 0
        ? `background: -webkit-radial-gradient(${position}% 50%, circle, transparent 6px, rgba(218, 218, 218, 0.4) 0)`
        : `background: -webkit-radial-gradient(${position}% 50%, circle, transparent 6px, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%)`;

    const detailsItemRound = document.createElement("div");
    detailsItemRound.className = "details-item__round";
    detailsItemRound.style.marginLeft = position - 3.3 + "%";

    detailsItemRange.append(detailsItemRound);

    if (!weatherDataObject[data].info) {
      const detailsItemFirst = document.createElement("span");
      detailsItemFirst.className = "details-item__first";
      detailsItemFirst.textContent =
        weatherDataObject[data].min + weatherDataObject[data].designation;

      const detailsItemSecond = document.createElement("span");
      detailsItemSecond.className = "details-item__second";
      detailsItemSecond.textContent = [
        weatherDataObject[data].max,
        weatherDataObject[data].designation,
      ].join(" ");
      detailsItemDesc.append(detailsItemFirst, detailsItemSecond);
    }

    detailsItemInfoCustom.append(detailsItemRange, detailsItemDesc);
  }

  detailsItem.append(detailsItemInfoall, detailsItemInfoCustom);
  detailsItemInfoall.append(detailsItemTitle, detailsItemImg, detailsItemValue);

  return detailsItem;
};
