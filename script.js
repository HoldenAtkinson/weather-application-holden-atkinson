var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.name')
var temp = document.querySelector('.temp')
var humidity = document.querySelector('.humidity')
var wind = document.querySelector('.wind')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1e1abfef4862065d738fdd48a265724d&units=imperial')
.then(Response=>Response.json())
.then(data=>{
  var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var humidityValue = data['main']['humidity'];
    var windValue = data['wind']['speed'];

    city.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    humidity.innerHTML = humidityValue;
    wind.innerHTML = windValue;
} )

.catch(err => alert("Wrong city name! "))
} )




