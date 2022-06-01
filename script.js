var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var city = document.querySelector(".name");
var dateEl = document.querySelector(".date");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var icon = document.querySelector(".icon");
var dayOneDate = document.querySelector(".day-one-date");
var dayOneTemp = document.querySelector(".day-one-temp");
var dayOneWind = document.querySelector(".day-one-wind");
var dayOneHumidity = document.querySelector(".day-one-humidity");
var dayTwoDate = document.querySelector(".day-two-date");
var dayTwoTemp = document.querySelector(".day-two-temp");
var dayTwoWind = document.querySelector(".day-two-wind");
var dayTwoHumidity = document.querySelector(".day-two-humidity");
var dayThreeDate = document.querySelector(".day-three-date");
var dayThreeTemp = document.querySelector(".day-three-temp");
var dayThreeWind = document.querySelector(".day-three-wind");
var dayThreeHumidity = document.querySelector(".day-three-humidity");
var dayFourDate = document.querySelector(".day-four-date");
var dayFourTemp = document.querySelector(".day-four-temp");
var dayFourWind = document.querySelector(".day-four-wind");
var dayFourHumidity = document.querySelector(".day-four-humidity");
var dayFiveDate = document.querySelector(".day-five-date");
var dayFiveTemp = document.querySelector(".day-five-temp");
var dayFiveWind = document.querySelector(".day-five-wind");
var dayFiveHumidity = document.querySelector(".day-five-humidity");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=1e1abfef4862065d738fdd48a265724d&units=imperial"
  )
    .then((Response) => Response.json())
    .then((data) => {
      var nameValue = data["name"];
      var iconValue = data["weather"]["icon"];
      var tempValue = data["main"]["temp"];
      var humidityValue = data["main"]["humidity"];
      var windValue = data["wind"]["speed"];

      city.innerHTML = nameValue + iconValue;
      temp.innerHTML = "Temperature:" + tempValue + "°F";
      icon.innerHTML = iconValue;
      humidity.innerHTML = "Humidity:" + humidityValue + "%";
      wind.innerHTML = "Wind Speed:" + windValue + "mp/h";
    })

    .catch((err) => alert("Wrong city name! "));

  window.localStorage.setItem("name", "Karl");
});

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inputValue.value +
      "&appid=1e1abfef4862065d738fdd48a265724d&units=imperial"
  )
    .then((Response) => Response.json())
    .then((data) => {
      var dayOneDateValue = data["list"]["0"]["dt"];
      var dayOneTempValue = data["list"]["0"]["main"]["temp"];
      var dayOneWindValue = data["list"]["0"]["wind"]["speed"];
      var dayOneHumidityValue = data["list"]["0"]["main"]["humidity"];
      var dayTwoDateValue = data["list"]["10"]["dt"];
      var dayTwoTempValue = data["list"]["10"]["main"]["temp"];
      var dayTwoWindValue = data["list"]["10"]["wind"]["speed"];
      var dayTwoHumidityValue = data["list"]["10"]["main"]["humidity"];
      var dayThreeDateValue = data["list"]["16"]["dt"];
      var dayThreeTempValue = data["list"]["16"]["main"]["temp"];
      var dayThreeWindValue = data["list"]["16"]["wind"]["speed"];
      var dayThreeHumidityValue = data["list"]["16"]["main"]["humidity"];
      var dayFourDateValue = data["list"]["24"]["dt"];
      var dayFourTempValue = data["list"]["24"]["main"]["temp"];
      var dayFourWindValue = data["list"]["24"]["wind"]["speed"];
      var dayFourHumidityValue = data["list"]["24"]["main"]["humidity"];
      var dayFiveDateValue = data["list"]["32"]["dt"];
      var dayFiveTempValue = data["list"]["32"]["main"]["temp"];
      var dayFiveWindValue = data["list"]["32"]["wind"]["speed"];
      var dayFiveHumidityValue = data["list"]["32"]["main"]["humidity"];

      dayOneDate.innerHTML = dateCreation(dayOneDateValue);
      dayOneTemp.innerHTML = "Temp:" + dayOneTempValue + "°F";
      dayOneWind.innerHTML = "Wind:" + dayOneWindValue + "mp/h";
      dayOneHumidity.innerHTML = "Humidity:" + dayOneHumidityValue + "%";
      dayTwoDate.innerHTML = dateCreation(dayTwoDateValue);
      dayTwoTemp.innerHTML = "Temp:" + dayTwoTempValue + "°F";
      dayTwoWind.innerHTML = "Wind:" + dayTwoWindValue + "mp/h";
      dayTwoHumidity.innerHTML = "Humidity:" + dayTwoHumidityValue + "%";
      dayThreeDate.innerHTML = dateCreation(dayThreeDateValue);
      dayThreeTemp.innerHTML = "Temp:" + dayThreeTempValue + "°F";
      dayThreeWind.innerHTML = "Wind:" + dayThreeWindValue + "mp/h";
      dayThreeHumidity.innerHTML = "Humidity:" + dayThreeHumidityValue + "%";
      dayFourDate.innerHTML = dateCreation(dayFourDateValue);
      dayFourTemp.innerHTML = "Temp:" + dayFourTempValue + "°F";
      dayFourWind.innerHTML = "Wind:" + dayFourWindValue + "mp/h";
      dayFourHumidity.innerHTML = "Humidity:" + dayFourHumidityValue + "%";
      dayFiveDate.innerHTML = dateCreation(dayFiveDateValue);
      dayFiveTemp.innerHTML = "Temp:" + dayFiveTempValue + "°F";
      dayFiveWind.innerHTML = "Wind:" + dayFiveWindValue + "mp/h";
      dayFiveHumidity.innerHTML = "Humidity:" + dayFiveHumidityValue + "%";

      startInterval();
    });
});

function startInterval() {
  setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const year = time.getFullYear();

    dateEl.innerHTML = months[month] + date + year;
  }, 1000);
}

function dateCreation(timeStamp) {
  var jsTimeStamp = timeStamp * 1000;
  var day = new Date(jsTimeStamp);

  return day.toLocaleDateString();
}
