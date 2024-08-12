// import lightbox from './lightbox.twig';
// import './lightbox.scss';
// import lightboxData from './lightbox.yml';
// // import gridCardData from './grid-cards.yml';
// // import gridCtaData from './grid-ctas.yml';

// /**
//  * Storybook Definition.
//  */
// export default { title: 'Organisms/lightbox' };

// export const defaultLightbox = () => lightbox(lightboxData);

// // export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// // export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
import { Fancybox } from '@fancyapps/ui';
import gallery from './gallery.twig';
import './gallery.scss';
import galleryData from './gallery.yml';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/gallery' };

// export const DefaultLightbox = () => lightbox(lightboxData);

// export const DefaultLightbox = () => {
//   const injectFancyboxScript = () => {
//     const script = document.createElement('script');
//     script.type = 'module';
//     script.innerHTML = `import { Fancybox } from 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.esm.js';
//       Fancybox.bind('[data-fancybox="img-gallery"]', {});`;
//     document.body.appendChild(script);
//   };
//   setTimeout(injectFancyboxScript, 0);
//   return gallery(galleryData);
// };

export const Default = () => {
  const html = gallery(galleryData);

  setTimeout(() => {
    Fancybox.bind("[data-fancybox='img-gallery']", {
      loop: true,
    });
  }, 0);

  return html;
};
