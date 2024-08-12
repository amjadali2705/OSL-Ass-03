import teammember from './teammember.twig';
import teammemberData from './teammember.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/teammember' };

export const teammembers = () => teammember(teammemberData);
