import serviceitem from './serviceitem.twig';
import serviceitemData from './serviceitem.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/serviceitem' };

export const serviceitemm = () => serviceitem(serviceitemData);
