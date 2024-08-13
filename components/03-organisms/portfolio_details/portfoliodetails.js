import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import $ from 'jquery';
import 'slick-carousel';

window.jQuery = $;
window.$ = $;

document.addEventListener('DOMContentLoaded', () => {
  $('.slick-slider').slick({
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 2000, // Time between slides (in milliseconds)
    dots: true, // Enables dots navigation
    infinite: true, // Enables infinite scrolling
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false, // Disables arrows for cleaner design (optional)
  });
});
