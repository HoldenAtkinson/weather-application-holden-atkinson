$( function() {
    $( "#selectable" ).selectable();
  } );

  const form = document.querySelector(".container form");
 
  form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
  });