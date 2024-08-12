import sailorcontact from './sailorcontact.twig';
import sailorcontactData from './sailorcontact.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/sailorcontact' };

export const sailorcontacts = () => sailorcontact(sailorcontactData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
