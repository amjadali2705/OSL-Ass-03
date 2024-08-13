import categorieslistitem from './categorieslistitem.twig';
import categorieslistitemData from './categorieslistitem.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/categorieslistitem' };
export const categorieslistitems = () =>
  categorieslistitem(categorieslistitemData);
