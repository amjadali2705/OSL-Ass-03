import mycard from './mycard.twig';
import './mycard.scss';
import mycardData from './mycard.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/mycard' };

export const card = () => mycard(mycardData);
