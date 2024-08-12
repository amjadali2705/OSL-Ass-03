import carouselitem1 from './carouselitem1.twig';
import carouselitem1Data from './carouselitem1.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/carouselitem1' };

export const carousel = () => carouselitem1(carouselitem1Data);
