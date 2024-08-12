import featurecard from './featurecard.twig';
import './featurecard.scss';
import featurecardData from './featurecard.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/featurecard' };

export const heroCompParts = () => featurecard(featurecardData);
