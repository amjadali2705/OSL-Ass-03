import blogpostsitem from './blogpostsitem.twig';
import blogpostsitemData from './blogpostsitem.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/blogpostsitem' };

export const blogpostsitems = () => blogpostsitem(blogpostsitemData);
