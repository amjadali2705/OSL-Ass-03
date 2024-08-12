import sailorservices from './sailorservices.twig';
import sailorservicesData from './sailorservices.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/sailorservices' };

export const sailorservice = () => sailorservices(sailorservicesData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
