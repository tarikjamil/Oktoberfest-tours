gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();

  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });

  // Add a label to mark the starting point of simultaneous animations
  tl.add("loadingAnimationsStart");

  // Add the 'loading' animation and set its position to the label
  tl.from(
    "[animation=loading]",
    {
      y: "20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "loadingAnimationsStart"
  ); // <-- position parameter set to the label
}

pageLoad();

// navbar color
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 50) {
      $(".navbar").addClass("is--scrolled");
    } else if (scrollTop < 50) {
      $(".navbar").removeClass("is--scrolled");
    }
  });
});

function adjustPadding() {
  document.querySelectorAll(".is--grid-2els").forEach(function (el) {
    if (el.parentElement.classList.contains("padding")) {
      el.parentElement.classList.add("padding-modified");
    } else {
      el.parentElement.classList.remove("padding-modified");
    }
  });
}

// Run on page load
adjustPadding();

// Run on window resize
window.addEventListener("resize", function () {
  if (window.innerWidth <= 991) {
    adjustPadding();
  } else {
    // Remove the class if the screen is wider than 991px
    document.querySelectorAll(".padding-modified").forEach(function (el) {
      el.classList.remove("padding-modified");
    });
  }
});
