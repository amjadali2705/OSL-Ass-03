import featuretablists from './featuretablists.twig';
import featuretablistsData from './featuretablists.yml';

export default { title: 'Molecules/featuretablists' };
export const featuretablist = () => featuretablists(featuretablistsData);
