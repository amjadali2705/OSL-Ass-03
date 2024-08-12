import navbar from './navbar.twig';
import './navbar.scss';
import navbarData from './navbar.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/navbar' };

export const navs = () => navbar(navbarData);
