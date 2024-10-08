export const weatherDataObject = {
  humidity: {
    name: "Влажность",
    icon: "./public/humidity.svg",
    value: 75,
    designation: "%",
    info: "",
    min: 0,
    max: 100,
  },
  barometr: {
    name: "Давление",
    icon: "./public/barometr.svg",
    value: 761,
    designation: "",
    info: "Повышенное",
    min: 700,
    max: 810,
  },
  visibility: {
    name: "Видимость",
    icon: "./public/visibility.svg",
    value: 28,
    designation: "км",
    info: "Нормальная",
    min: 0,
    max: 109,
  },
  sunrise: {
    name: "Рассвет",
    icon: "./public/sunrise.svg",
    value: "8:42",
    designation: "",
    info: "Прошло: ",
    changeTime: "02:47",
  },
  sunset: {
    name: "Закат",
    icon: "./public/sunset.svg",
    value: "16:37",
    designation: "",
    info: "Осталось: ",
    changeTime: "05:08",
  },
  wind: {
    name: "Сила ветра",
    icon: "./public/northwest.svg",
    value: 2,
    designation: "м/с",
    info: "Cеверо-западный",
  },
};

//Данный массив пока нигде не используется
export const weatherDataArray = [
  {
    id: "humidity",
    name: "Влажность",
    icon: "./public//humidity.svg",
    value: 75,
    designation: "%",
    info: "",
    min: 0,
    max: 100,
  },
  {
    id: "barometr",
    name: "Давление",
    icon: "./public/barometr.svg",
    value: 761,
    designation: "",
    info: "Повышенное",
    min: 0,
    max: 1000,
  },
  {
    id: "visibility",
    name: "Видимость",
    icon: "./public/visibility.svg",
    value: 28,
    designation: "км",
    info: "Нормальная",
    min: 0,
    max: 1000,
  },
  {
    id: "sunrise",
    name: "Рассвет",
    icon: "./public/sunrise.svg",
    value: "8:42",
    designation: "",
    info: "Прошло:",
    passed: "02:47",
  },
  {
    id: "sunset",
    name: "Закат",
    icon: "./public/sunset.svg",
    value: "16:37",
    designation: "",
    info: "Осталось:",
    remained: "05:08",
  },
  {
    id: "wind",
    name: "Сила ветра",
    icon: "./public/northwest.svg",
    value: 2,
    designation: "м/с",
    info: "Северо-западный",
  },
];

export const weatherDataTwentyFourHours = [
  {
    id: 1,
    time: "12:00",
    descRu: "Облачно",
    descEn: "Broken clouds",
    icon: "./public/weather-icon/day-broken-clouds.png",
    temp: -7,
  },
  {
    id: 2,
    time: "15:00",
    descRu: "Облачно",
    descEn: "Broken clouds",
    icon: "./public/weather-icon/day-broken-clouds.png",
    temp: -5,
  },
  {
    id: 3,
    time: "18:00",
    descRu: "Облачно",
    descEn: "Broken clouds",
    icon: "./public/weather-icon/day-broken-clouds.png",
    temp: -7,
  },
  {
    id: 4,
    time: "21:00",
    descRu: "Облачно",
    descEn: "Broken clouds",
    icon: "./public/weather-icon/day-broken-clouds.png",
    temp: -9,
  },
  {
    id: 5,
    time: "00:00",
    descRu: "Облачно",
    descEn: "Broken clouds",
    icon: "./public/weather-icon/day-broken-clouds.png",
    temp: -11,
  },
  {
    id: 6,
    time: "03:00",
    descRu: "Облачно",
    descEn: "Broken clouds",
    icon: "./public/weather-icon/day-broken-clouds.png",
    temp: -7,
  },
  {
    id: 7,
    time: "06:00",
    descRu: "Облачно",
    descEn: "Broken clouds",
    icon: "./public/weather-icon/day-broken-clouds.png",
    temp: -4,
  },
  {
    id: 8,
    time: "09:00",
    descRu: "Облачно",
    descEn: "Broken clouds",
    icon: "./public/weather-icon/day-broken-clouds.png",
    temp: -2,
  },
];

export const weatherDataFiveDays = [
  {
    id: 1,
    dayWeek: "Вс",
    date: "07 янв.",
    icon: "./public/weather-icon/day-few-clouds.png",
    minTemp: -17,
    maxTemp: -11,
  },
  {
    id: 2,
    dayWeek: "Пн",
    date: "08 янв.",
    icon: "./public/weather-icon/day-few-clouds.png",
    minTemp: -16,
    maxTemp: -8,
  },
  {
    id: 3,
    dayWeek: "Вт",
    date: "09 янв.",
    icon: "./public/weather-icon/day-broken-clouds.png",
    minTemp: -8,
    maxTemp: -2,
  },
  {
    id: 4,
    dayWeek: "Ср",
    date: "10 янв.",
    icon: "./public/weather-icon/day-broken-clouds.png",
    minTemp: -6,
    maxTemp: 4,
  },
  {
    id: 5,
    dayWeek: "Чт",
    date: "11 янв.",
    icon: "./public/weather-icon/day-snow.png",
    minTemp: -8,
    maxTemp: -1,
  },
  {
    id: 6,
    dayWeek: "Пт",
    date: "12 янв.",
    icon: "./public/weather-icon/day-few-clouds.png",
    minTemp: -12,
    maxTemp: -8,
  },
  {
    id: 7,
    dayWeek: "Сб",
    date: "13 янв.",
    icon: "./public/weather-icon/day-clear-sky.png",
    minTemp: -16,
    maxTemp: -10,
  },
  {
    id: 8,
    dayWeek: "Вс",
    date: "14 янв.",
    icon: "./public/weather-icon/day-clear-sky.png",
    minTemp: -18,
    maxTemp: -14,
  },
];
