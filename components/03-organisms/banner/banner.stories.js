import banner from './banner.twig';
import './banner.scss';
import bannerData from './banner.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/banner' };

export const defaultService = () => banner(bannerData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
