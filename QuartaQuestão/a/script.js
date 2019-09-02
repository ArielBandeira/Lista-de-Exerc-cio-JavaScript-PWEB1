
const galeria = function () {
    let that = this;
   this.stream = document.querySelector('.gallery__stream');
   this.items = document.querySelectorAll('.gallery__item');

   this.btnPrev = document.querySelector('.gallery__prev');
   this.btnNext = document.querySelector('.gallery__next');


   this.next = function () {
     that.stream.appendChild(that.items[0]);
     that.items = document.querySelectorAll('.gallery__item');
   };

   this.prev = function () {
     that.stream.insertBefore(that.items[that.items.length - 1], that.items[0]);
     that.items = document.querySelectorAll('.gallery__item');
   };
};

const minhaGaleria = new galeria();

minhaGaleria.btnPrev.addEventListener('click', minhaGaleria.prev);

minhaGaleria.btnNext.addEventListener('click', minhaGaleria.next);
