import search from './search.twig';
import './search.scss';
import searchData from './search.yml';

export default { title: 'Atoms/search' };

export const twig = () => search(searchData);
