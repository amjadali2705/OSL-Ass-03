import contactforms from './contactforms.twig';
import contactformsData from './contactforms.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/contactforms' };

export const contactform = () => contactforms(contactformsData);
