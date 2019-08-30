var stream = document.querySelector('.gallery__stream');
var items = document.querySelectorAll('.gallery__item');
var checkbox = document.getElementById("myCheckbox")

var prev = document.querySelector('.gallery__prev');
var next = document.querySelector('.gallery__next');

var listen;
var listenn;

prev.addEventListener("mouseover", listen = function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item');
});

next.addEventListener("mouseover", listenn = function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item');
});

checkbox.addEventListener("click", function() {

  if(checkbox.checked == false){
    prev.addEventListener("mouseover", listen = function() {
        stream.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.gallery__item');
    });

    next.addEventListener("mouseover", listenn = function() {
        stream.appendChild(items[0]);
        items = document.querySelectorAll('.gallery__item');
    });

  }else if(checkbox.checked == true){

    prev.removeEventListener("mouseover", listen);
    next.removeEventListener("mouseover", listenn);

  }else{}
});
