import nav from './nav.twig';
import './nav.scss';
import navData from './nav.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/nav' };

export const navs = () => nav(navData);
