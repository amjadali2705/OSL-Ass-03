import img from './img.twig';
import imgData from './img.yml';
import './img.scss';

export default { title: 'Atoms/img' };
export const twigg = () => img(imgData);
