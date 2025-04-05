const prev = document.getElementById('prev');
const next = document.getElementById('next');


const slides = document.querySelector('.slides');
let index = 0;

function nextSlide() {
  index++;
  if (index >= slides.children.length) {
    index = 0;
  }
  updateSlider();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.children.length - 1;
  }
  updateSlider();
}

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}


setInterval(nextSlide, 3000);



prev.addEventListener('click', () => {prevSlide();});
next.addEventListener('click', () => {nextSlide();});