import tabitem from './tabitem.twig';
import tabitemData from './tabitem.yml';

export default { title: 'Atoms/tabitem' };

export const tabitems = () => tabitem(tabitemData);
