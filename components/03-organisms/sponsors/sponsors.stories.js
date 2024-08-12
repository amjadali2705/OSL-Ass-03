import sponsors from './sponsors.twig';
import './sponsors.scss';
import sponsorsData from './sponsors.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/sponsors' };

export const sponsor = () => sponsors(sponsorsData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
