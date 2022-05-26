$( function() {
    $( "#selectable" ).selectable();
  } );

  const submitButton = document.querySelector('.search-btn')
  const inputBox = document.querySelector('.search-bar')
  const cityName = document.querySelector('.city-name')
  const temp = document.querySelector('.temp')
  const wind = document.querySelector('.wind')
  const humidity = document.querySelector('.humidity')
  const uvIndex = document.querySelector('.uv-index')



  submitButton.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&appid=1e1abfef4862065d738fdd48a265724d')
  .then(Response=>Response.json())
  .then(data=>console.log(data))
})




