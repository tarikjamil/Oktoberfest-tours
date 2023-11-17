// slider resources
document.addEventListener("DOMContentLoaded", function () {
  // Select all .is--resources-slider elements
  let sliders = document.querySelectorAll(".is--blog-slider");

  // For each slider, initialize Splide
  sliders.forEach(function (slider) {
    let splide = new Splide(slider, {
      type: "slide",
      perPage: 2,
      perMove: 1,
      gap: "24rem",
      arrows: false,
      pagination: false,
      breakpoints: {
        991: {
          perPage: 1,
          drag: true,
        },
      },
    });
    splide.mount();
  });
});

// slider resources
document.addEventListener("DOMContentLoaded", function () {
  // Select all .is--resources-slider elements
  let sliders = document.querySelectorAll(".is--testimonial-slider");

  // For each slider, initialize Splide
  sliders.forEach(function (slider) {
    let splide = new Splide(slider, {
      type: "slide",
      perPage: 1,
      perMove: 1,
      gap: "24rem",
      arrows: false,
      pagination: false,
      breakpoints: {
        991: {
          drag: true,
        },
      },
    });
    splide.mount();
  });
});
