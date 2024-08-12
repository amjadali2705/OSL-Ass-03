import sectiontitle from './sectiontitle.twig';
import './sectiontitle.scss';
import sectiontitleData from './sectiontitle.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/sectiontitle' };

export const title = () => sectiontitle(sectiontitleData);
