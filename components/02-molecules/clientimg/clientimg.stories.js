import clientimg from './clientimg.twig';
import clientimgData from './clientimg.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/clientimg' };

export const clientimage = () => clientimg(clientimgData);
