import imagegallery from './imagegallery.twig';
import './imagegallery.scss';
import imagegalleryData from './imagegallery.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/imagegallery' };

// export const DefaultLightbox = () => lightbox(lightboxData);

export const DefaultLightbox = () => {
  const injectFancyboxScript = () => {
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `import { Fancybox } from 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.esm.js';
      Fancybox.bind('[data-fancybox="gallery"]', {});`;
    document.body.appendChild(script);
  };
  setTimeout(injectFancyboxScript, 0);
  return imagegallery(imagegalleryData);
};
