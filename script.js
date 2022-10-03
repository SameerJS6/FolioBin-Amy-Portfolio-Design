const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  arrows: true,
  skipBtn: false,
});

// Reveal Animation 
ScrollReveal().reveal('.introduction', { delay: 25 }, {duration: 1500});
ScrollReveal().reveal('.carousel', { delay: 5 });
ScrollReveal().reveal('.cta', { delay: 5 }, {duration: 1000});
ScrollReveal().reveal('.footer-nav',{ delay: 5 }, {duration: 1500});
