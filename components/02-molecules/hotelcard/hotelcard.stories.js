import hotelcard from './hotelcard.twig';
import './hotelcard.scss';
import hotelcardData from './hotelcard.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/hotelcard' };

export const hotelcards = () => hotelcard(hotelcardData);
