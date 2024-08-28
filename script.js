
function slidefun(){
  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
      currentIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
      currentIndex = totalSlides - 1; // Go to the last slide
    } else {
      currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 800}px)`; // Slide 800px each time
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);

}

slidefun();


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)