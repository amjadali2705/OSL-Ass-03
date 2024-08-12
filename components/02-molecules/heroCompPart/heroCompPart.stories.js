import heroCompPart from './heroCompPart.twig';
import './heroCompPart.scss';
import heroCompPartData from './heroCompPart.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/heroCompPart' };

export const heroCompParts = () => heroCompPart(heroCompPartData);
