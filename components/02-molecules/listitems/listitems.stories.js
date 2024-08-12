import listitems from './listitems.twig';
import './listitems.scss';
import listitemsData from './listitems.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/listitems' };

export const items = () => listitems(listitemsData);
