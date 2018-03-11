let sliderColors = document.querySelectorAll(".slide"),
    arrowRight = document.querySelector("#arrow-right"),
    arrowLeft = document.querySelector("#arrow-left"),
    current = 0;

// clear all images
    function reset () {
    for (let i = 0; i < sliderColors.length; i++){
        sliderColors[i].style.display = "none";
    }
}
// initialise the slider
    function startSlide() {
        reset();
        sliderColors[0].style.display = "block";
    }
// show previous

    function slideLeft() {
        reset();
        sliderColors[current - 1].style.display = "block";
        current--;
    }
// show next
    function slideRight() {
        reset();
        sliderColors[current + 1].style.display = "block";
        current++;

// left arrow click 

    arrowLeft.addEventListener("click", function() {
        if (current === 0) {
            current = sliderColors.length;
        }
        slideLeft();
    });

// right arrow click
    arrowRight.addEventListener("click", function() {
        if (current === sliderColors.length - 1) {
            current = -1;
        }
        slideRight();
    });

    startSlide();