
// carouserl slider

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,

  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 3
      },
      1000: {
          items: 4
      }
  }
});