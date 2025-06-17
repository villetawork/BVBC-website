let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("fade");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    // Hide all slides and deactivate all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }

    // Wrap around if index goes out of bounds
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // Show the current slide and set the active dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add('active');

    // Schedule next slide
    timeoutId = setTimeout(() => {
        slideIndex++;
        showSlides();
    }, 5000); // 5 seconds
}

function currentSlide(index) {
    slideIndex = index;
    restartSlideshow();
}

function plusSlides(step) {
    slideIndex += step;
    restartSlideshow();
}

// Restart timer when manually navigating
function restartSlideshow() {
    clearTimeout(timeoutId); // stop old timer
    showSlides();            // show new slide and start new timer
}

// Start slideshow on page load
window.onload = showSlides;
