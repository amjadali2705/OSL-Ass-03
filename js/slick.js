// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import $ from 'jquery';
// import 'slick-carousel';

// window.jQuery = $;
// window.$ = $;

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Slick Slider initialization code is running.');
//     $('.slick-slider').slick({
//       autoplay: true, // Enables automatic sliding
//       autoplaySpeed: 2000, // Time between slides (in milliseconds)
//       dots: true, // Enables dots navigation
//       infinite: true, // Enables infinite scrolling
//       speed: 500, // Slide transition speed
//       slidesToShow: 1, // Number of slides to show at a time
//       slidesToScroll: 1, // Number of slides to scroll at a time
//       arrows: false, // Disables arrows for cleaner design (optional)
//     });
//   });


(function($) {
    $(document).ready(function() {
      $('.slick-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      });
    });
  })(jQuery);
  