import sectionheading from './sectionheading.twig';
import sectionheadingData from './sectionheading.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/sectionheading' };

export const heading = () => sectionheading(sectionheadingData);
