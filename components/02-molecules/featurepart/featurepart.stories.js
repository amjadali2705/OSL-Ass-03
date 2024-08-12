import featurepart from './featurepart.twig';
import './featurepart.scss';
import featurepartData from './featurepart.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/featurepart' };

export const heroCompParts = () => featurepart(featurepartData);
