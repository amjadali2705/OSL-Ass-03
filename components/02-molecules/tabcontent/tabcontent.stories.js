import tabcontent from './tabcontent.twig';
import tabcontentData from './tabcontent.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/tabcontent' };

export const tabcontents = () => tabcontent(tabcontentData);
