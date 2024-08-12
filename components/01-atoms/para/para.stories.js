import para from './para.twig';
import './para.scss';
import paraData from './para.yml';

export default { title: 'Atoms/para' };

export const twig = () => para(paraData);
