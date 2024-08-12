import statsitem from './statsitem.twig';
import './statsitem';
import statsitemData from './statsitem.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/statsitem' };

export const statsitems = () => statsitem(statsitemData);
