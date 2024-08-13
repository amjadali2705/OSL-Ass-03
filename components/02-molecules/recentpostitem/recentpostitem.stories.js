import recentpostitem from './recentpostitem.twig';
import recentpostitemData from './recentpostitem.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/recentpostitem' };

export const recentpostitems = () => recentpostitem(recentpostitemData);
