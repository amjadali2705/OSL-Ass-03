import contacttype from './contacttype.twig';
import contacttypeData from './contacttype.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/contacttype' };

export const contacttypes = () => contacttype(contacttypeData);
