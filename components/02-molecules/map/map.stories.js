import map from './map.twig';
import mapData from './map.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/map' };

export const maps = () => map(mapData);
