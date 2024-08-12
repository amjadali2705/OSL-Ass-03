import { defaultOptions, Fancybox } from '@fancyapps/ui';
import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../src/scss/style.scss';
// Adjust the path according to your project structure
import $ from 'jquery';
import 'slick-carousel'; 
window.jQuery = $;
window.$ = $;
// GLOBAL CSS
import '../components/style.scss';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';


// .storybook/preview.js
import 'animate.css/animate.min.css'; // Import animate.css
import { WOW } from 'wowjs';

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1200,
})

// Initialize WOW.js globally
if (typeof window !== "undefined") {
  new WOW().init();
}


export const decorators = [
  (Story, { args }) => {
    const { renderAs } = args || {};

    // Usual emulsify hack to add Drupal behaviors.
    useEffect(() => {
      Drupal.attachBehaviors();
      if(window.WOW) {
        new WOW().init();
      }
    }, [args]);
    return Story();
  },
];

setupTwig(Twig);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

document.addEventListener('DOMContentLoaded',() =>{   
// Initialize Slick Slider with options
$('.services_container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
// Add more options as needed
});

document.addEventListener('DOMContentLoaded',() =>{   
  // Initialize Slick Slider with options
  $('.img-gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // Add more options as needed
  });

document.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.nav-link');

  sections.forEach((section)=> {
    var rect = section.getBoundingClientRect();
    var id = section.getAttribute('id');

    if(rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      navLinks.forEach(Link => {
        Link.classList.remove('active');
        if(Link.getAttribute('href') === '#' + id) {
          Link.classList.add('active');
        }
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const applyResponsiveSlick = () => {
    if(window.matchMedia("(max-width: 768px)").matches) {
      initializeSlickSlider(mobileOptions);
    } else {
      initializeSlickSlider(defaultOptions);
    }
  };

  applyResponsiveSlick();

  window.addEventListener('resize', applyResponsiveSlick);
});