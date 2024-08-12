import sponsorlogo from './sponsorlogo.twig';
import './sponsorlogo.scss';
import sponsorlogoData from './sponsorlogo.yml';

export default { title: 'Atoms/sponsorlogo' };

export const splogo = () => sponsorlogo(sponsorlogoData);
