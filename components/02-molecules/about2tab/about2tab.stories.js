import about2tab from './about2tab.twig';

import about2tabData from './about2tab.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/about2tab' };

export const about2tabs = () => about2tab(about2tabData);
