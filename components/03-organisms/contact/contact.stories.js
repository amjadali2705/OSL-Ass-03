import contact from './contact.twig';
import './contact.scss';
import contactData from './contact.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/contact' };

export const contacts = () => contact(contactData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
