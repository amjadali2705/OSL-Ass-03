import tags from './tags.twig';
import tagsData from './tags.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/tags' };

export const tag = () => tags(tagsData);
