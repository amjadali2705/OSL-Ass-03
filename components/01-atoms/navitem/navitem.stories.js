import navitem from './navitem.twig';
// import './para.scss';
import navitemData from './navitem.yml';

export default { title: 'Atoms/navitem' };

export const navitm = () => navitem(navitemData);
