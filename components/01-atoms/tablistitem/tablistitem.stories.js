import tablistitem from './tablistitem.twig';
import tablistitemData from './tablistitem.yml';

export default { title: 'Atoms/tablistitem' };
export const tablistitems = () => tablistitem(tablistitemData);
