import contact from './contact.twig';
import './contact.scss';
import contactData from './contact.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/contact' };

export const cont = () => contact(contactData);
