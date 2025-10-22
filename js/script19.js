// Starts the slideshow with first slide
let slideIndex = 1;
showSlides(slideIndex);

// Changes the slideshow to a specific slide when the dot connected to it is clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display the correct slide and update active dot
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Makes the slide loops 
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Remove slide from view
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Removes the highlighted state from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and highlight its dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Changes the slide every 5 seconds
setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 5000);

// Scrolls to the bottom section when the page finishes loading
document.addEventListener('DOMContentLoaded', () => {
  const bottom = document.querySelector('.racing-page');
  if (bottom) {
    bottom.scrollIntoView({ behavior: 'auto' });
  }
});
