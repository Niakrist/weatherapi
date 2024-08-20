import { weatherDataObject } from "./mockData/mockWeatherData.js";
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
    const detailsItemRange = document.createElement("input");
    detailsItemRange.className =
      index % 2 !== 0 ? "details-item__range--barometr" : "details-item__range";
    detailsItemRange.type = "range";
    detailsItemRange.min = weatherDataObject[data].min;
    detailsItemRange.max = weatherDataObject[data].max;
    detailsItemRange.value = weatherDataObject[data].value;

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
