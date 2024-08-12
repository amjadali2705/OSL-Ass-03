import venue from './venue.twig';
import './venue.scss';
import venueData from './venue.yml';

export default { title: 'Organisms/venue' };
export const venues = () => {
  const injectFancyboxScript = () => {
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `import { Fancybox } from 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.esm.js';
        Fancybox.bind('[data-fancybox="venue-gallery"]', {});`;
    document.body.appendChild(script);
  };
  setTimeout(injectFancyboxScript, 0);
  return venue(venueData);
};
