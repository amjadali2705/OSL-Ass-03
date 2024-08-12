import progressbars from './progressbars.twig';
import progressbarsData from './progressbars.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/progressbars' };

export const progressbar = () => progressbars(progressbarsData);
