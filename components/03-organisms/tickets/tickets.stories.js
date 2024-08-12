import tickets from './tickets.twig';
import './tickets.scss';
import ticketsData from './tickets.yml';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/tickets' };

export const ticket = () => tickets(ticketsData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
