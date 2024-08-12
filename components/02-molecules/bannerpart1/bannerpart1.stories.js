import bannerpart1 from './bannerpart1.twig';
import './bannerpart1.scss';
import bannerpart1Data from './bannerpart1.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/bannerpart1' };

export const cont = () => bannerpart1(bannerpart1Data);
