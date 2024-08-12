import speaker from './speaker.twig';
import './speaker.scss';
import speakerData from './speaker.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/speaker' };

export const title = () => speaker(speakerData);
