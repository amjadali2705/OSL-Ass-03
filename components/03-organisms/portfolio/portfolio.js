import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import Isotope from 'isotope-layout';
// Initialize Isotope
document.addEventListener('DOMContentLoaded', () => {
  const iso = new Isotope('.isotope-container', {
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry',
    filter: '*',
  });

  // Filter items on click
  const filters = document.querySelector('.isotope-filters');
  filters.addEventListener('click', (event) => {
    if (!event.target.classList.contains('filter-active')) {
      const filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });

      // Update active class
      filters.querySelector('.filter-active').classList.remove('filter-active');
      event.target.classList.add('filter-active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind('[data-fancybox="portfolio-gallery-app"]', {
    //  Add any Fancybox options here
  });
});
