import testimonialitem from './testimonialitem.twig';
import testimonialitemData from './testimonialitem.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/testimonialitem' };

export const testimonialitems = () => testimonialitem(testimonialitemData);
