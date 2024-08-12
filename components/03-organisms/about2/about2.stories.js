import about2 from './about2.twig';
import about2Data from './about2.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/about2' };

export const abouttab = () => about2(about2Data);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
