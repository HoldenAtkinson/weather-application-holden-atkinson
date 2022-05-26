$( function() {
    $( "#selectable" ).selectable();
  } );

  const button = document.querySelector('.button')
  const inputBox = document.querySelector('.inputValue')
  const cityName = document.querySelector('.city-name')
  const temp = document.querySelector('.temp')
  const wind = document.querySelector('.wind')
  const humidity = document.querySelector('.humidity')
  const uvIndex = document.querySelector('.uv-index')



  button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=1e1abfef4862065d738fdd48a265724d')
  .then(response=>response.json())
  .then(data=>console.log(data))
})




