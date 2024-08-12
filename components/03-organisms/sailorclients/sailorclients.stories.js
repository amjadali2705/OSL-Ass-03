import sailorclients from './sailorclients.twig';
import sailorclientsData from './sailorclients.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/sailorclients' };

export const sailorclient = () => sailorclients(sailorclientsData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
