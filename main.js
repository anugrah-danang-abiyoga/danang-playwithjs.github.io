let sliderColors = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderColors.length; i++) {
    sliderColors[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderColors[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderColors[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderColors[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderColors.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderColors.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
