// import '@fancyapps/ui/dist/fancybox/fancybox.css';
// import { Fancybox } from '@fancyapps/ui';
// import Isotope from 'isotope-layout';
// // Initialize Isotope
// document.addEventListener('DOMContentLoaded', () => {
//   const iso = new Isotope('.isotope-container', {
//     itemSelector: '.portfolio-item',
//     layoutMode: 'masonry',
//     filter: '*',
//   });

//   // Filter items on click
//   const filters = document.querySelector('.isotope-filters');
//   filters.addEventListener('click', (event) => {
//     if (!event.target.classList.contains('filter-active')) {
//       const filterValue = event.target.getAttribute('data-filter');
//       iso.arrange({ filter: filterValue });

//       // Update active class
//       filters.querySelector('.filter-active').classList.remove('filter-active');
//       event.target.classList.add('filter-active');
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   Fancybox.bind('[data-fancybox]', {
//     //  Add any Fancybox options here
//   });
// });


// (function ($, Drupal) {
//   Drupal.behaviors.customIsotopeAndFancybox = {
//     attach: function (context, settings) {
//       // Initialize Isotope
//       const iso = new Isotope('.isotope-container', {
//         itemSelector: '.portfolio-item',
//         layoutMode: 'masonry',
//         filter: '*',
//       });

//       // Filter items on click
//       const filters = $('.isotope-filters', context);
//       filters.on('click', 'button', function (event) {
//         const $this = $(this);
//         if (!$this.hasClass('filter-active')) {
//           const filterValue = $this.attr('data-filter');
//           iso.arrange({ filter: filterValue });

//           // Update active class
//           filters.find('.filter-active').removeClass('filter-active');
//           $this.addClass('filter-active');
//         }
//       });

//       // Initialize Fancybox
//       Fancybox.bind('[data-fancybox]', {
//         // Add any Fancybox options here
//       });
//     }
//   };
// })(jQuery, Drupal);

// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  console.log('Isotope.js loaded');

  // Initialize Isotope
  var iso = new Isotope('.isotope-container', {
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry',
    filter: '*'
  });

  // Filter items on click
  var filters = document.querySelector('.isotope-filters');
  if (filters) {
    filters.addEventListener('click', function (event) {
      if (event.target.matches('.filter-button')) {
        var filterValue = event.target.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });

        // Update active class
        var activeButton = filters.querySelector('.filter-active');
        if (activeButton) {
          activeButton.classList.remove('filter-active');
        }
        event.target.classList.add('filter-active');
      }
    });
  }

  // Initialize Fancybox
  Fancybox.bind('[data-fancybox]', {
    // Add any Fancybox options here
  });

});
