// create active card as the element of array
//slides[3].classList.add('active')

// create function for active card
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    //put value activeSlide in the array
    slides[activeSlide].classList.add('active')

for (const slide of slides) {
     slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
      })
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
      })
  }
}

//call to function
// if didn't send parameters in the function, so activeSlide=0 or first card is active
slidesPlugin(2)
 