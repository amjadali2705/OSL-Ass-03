import featuretabscontent from './featuretabscontent.twig';
import featuretabscontentData from './featuretabscontent.yml';

export default { title: 'Molecules/featuretabscontent' };
export const featuretabscontents = () =>
  featuretabscontent(featuretabscontentData);
