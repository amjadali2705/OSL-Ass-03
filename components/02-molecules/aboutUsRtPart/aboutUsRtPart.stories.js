import aboutUsRtPart from './aboutUsRtPart.twig';

import aboutUsRtPartData from './aboutUsRtPart.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/aboutUsRtPart' };

export const aboutUsPart = () => aboutUsRtPart(aboutUsRtPartData);
