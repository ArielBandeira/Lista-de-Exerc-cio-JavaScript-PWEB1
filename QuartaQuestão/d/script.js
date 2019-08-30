var stream = document.querySelector('.gallery__stream');
var items = document.querySelectorAll('.gallery__item');
var checkbox = document.getElementById("myCheckbox")

var prev = document.querySelector('.gallery__prev');
var next = document.querySelector('.gallery__next');


checkbox.addEventListener("change", function() {
  if(checkbox.checked != true){
    prev.addEventListener("click", function() {
         stream.insertBefore(items[items.length - 1], items[0]);
         items = document.querySelectorAll('.gallery__item');
       });

     next.addEventListener("click", function() {
         stream.appendChild(items[0]);
         items = document.querySelectorAll('.gallery__item');
     });
  }else if(checkbox.checked === true){
    prev.addEventListener("mouseover", function() {
         stream.insertBefore(items[items.length - 1], items[0]);
         items = document.querySelectorAll('.gallery__item');
       });

     next.addEventListener("mouseover", function() {
         stream.appendChild(items[0]);
         items = document.querySelectorAll('.gallery__item');
     });
  }

});



      //
      //
      //
      // prev.addEventListener("mouseover", function() {
      //     stream.insertBefore(items[items.length - 1], items[0]);
      //     items = document.querySelectorAll('.gallery__item');
      //   });
      //
      // next.addEventListener("mouseover", function() {
      //     stream.appendChild(items[0]);
      //     items = document.querySelectorAll('.gallery__item');
      // });
