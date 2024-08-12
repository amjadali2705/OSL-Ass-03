import btn from './btn.twig';
import btnData from './btn.yml';
import './btn.scss';

export default { title: 'Atoms/btn' };
export const twigg = () => btn(btnData);
