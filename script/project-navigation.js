// script for scrolling through projects //

const buttons = document.getElementsByClassName("button");

const slideIndex = [1];
const interval = { count: 1 };

showDivs(slideIndex[0]);

function showDivs(n) {
  let slides = [...document.getElementsByClassName("my-slides")];

  if(n > slides.length) {
    slideIndex[0] = 1;
  } else if(n < 1) {
    slideIndex[0] = slides.length;
  }

  slides.map((item) => {
    if(item !== slides[slideIndex[0] - 1]) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}

buttons[0].addEventListener("click", () => {
  showDivs(slideIndex[0] -= 1);
  interval.count = 1;
});

buttons[1].addEventListener("click", () => {
  showDivs(slideIndex[0] += 1);
  interval.count = 1;
});

setInterval(() => {
  if(interval.count === 9) {
    showDivs(slideIndex[0] += 1);
    interval.count = 1;
  }
  interval.count++;
}, 1000);

// end of script for scrolling through projects //

$(document).ready(function() {

// script for navigation buttons to appear when hovered over //

  $(".projects-container, .button").hover(function() {
    $(".button").css({
      "color": "white",
      "background-color": "orangered"
    });
  }, function() {
    $(".button").css({
      "color": "transparent",
      "background-color": "transparent"
    });
  });

// end of script for navigation buttons to appear when hovered over //


// script for remote and download button to be white when hovered over //

  $(".remote-version").hover(function() {
    $(".fa-upload").css("color", "white");
  }, function() {
    $(".fa-upload").css("color", "black");
  });

  $(".download-local").hover(function() {
    $(".fa-download").css("color", "white");
  }, function() {
    $(".fa-download").css("color", "black");
  });

// end of script for remote and download button to be white when hovered over //
});



