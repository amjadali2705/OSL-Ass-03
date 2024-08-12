import ticketprice1 from './ticketprice1.twig';
import './ticketprice1.scss';
import ticketprice1Data from './ticketprice1.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/ticketprice1' };

export const title = () => ticketprice1(ticketprice1Data);
