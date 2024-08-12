import featurecards from './featurecards.twig';
import './featurecards.scss';
import featurecardsData from './featurecards.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/featurecards' };

export const headerService = () => featurecards(featurecardsData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
