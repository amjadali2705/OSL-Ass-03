import ticketprice2 from './ticketprice2.twig';
import './ticketprice2.scss';
import ticketprice2Data from './ticketprice2.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/ticketprice2' };

export const title = () => ticketprice2(ticketprice2Data);
