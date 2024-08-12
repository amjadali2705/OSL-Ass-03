import listitem from './listitem.twig';
import listitemData from './listitem.yml';
import './listitem.scss';

export default { title: 'Atoms/listitem' };

export const twig = () => listitem(listitemData);
