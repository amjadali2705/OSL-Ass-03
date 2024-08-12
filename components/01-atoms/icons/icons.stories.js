import icons from './icons.twig';
import iconsData from './icons.yml';
import './icons.scss';

export default { title: 'Atoms/icons' };
export const twigg = () => icons(iconsData);
