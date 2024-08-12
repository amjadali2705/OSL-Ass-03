import aboutevent from './aboutevent.twig';

import abouteventData from './aboutevent.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/aboutevent' };

export const event = () => aboutevent(abouteventData);
