var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.name')
var temp = document.querySelector('.temp')
var humidity = document.querySelector('.humidity')
var wind = document.querySelector('.wind')
var icon = document.querySelector('.icon')
// var dayOneTemp = document.querySelector('.day-one-temp')
// var dayOneWind = document.querySelector('')
// var dayOneHumidity = document.querySelector('')
// var dayTwoTemp = document.querySelector('.day-two-temp')
// var dayTwoWind= document.querySelector('')
// var dayTwoHumidity = document.querySelector('')
// var dayThreeTemp = document.querySelector('.day-one-temp')
// var dayThreeWind = document.querySelector('')
// var dayThreeHumidity = document.querySelector('')
// var dayFourTemp = document.querySelector('.day-one-temp')
// var dayFourWind = document.querySelector('')
// var dayFourHumidity = document.querySelector('')
// var dayFiveTemp = document.querySelector('.day-one-temp')
// var dayFiveWind = document.querySelector('')
// var dayFiveHumidity = document.querySelector('')



button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1e1abfef4862065d738fdd48a265724d&units=imperial')
.then(Response=>Response.json())
.then(data=> console.log(data)
//   {
  //   var nameValue = data['name'];
//   var iconValue = data['weather']['icon'];
//     var tempValue = data['main']['temp'];
//     var humidityValue = data['main']['humidity'];
//     var windValue = data['wind']['speed'];


//     city.innerHTML = nameValue + iconValue;
//     icon.innerHTML = iconValue;
//     temp.innerHTML =  "Temperature:" + tempValue + "°F";
//     humidity.innerHTML = "Humidity:" + humidityValue + "%";
//     wind.innerHTML = "Wind Speed:" + windValue + "mp/h";
// } 
)

.catch(err => alert("Wrong city name! "))
} )

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=1e1abfef4862065d738fdd48a265724d&units=imperial')
  .then(Response => Response.json())
  .then(data => console.log(data))
})




