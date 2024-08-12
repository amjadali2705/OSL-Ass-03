import portfoliofilters from './portfoliofilters.twig';
import portfoliofiltersData from './portfoliofilters.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/portfoliofilters' };

export const portfoliofilter = () => portfoliofilters(portfoliofiltersData);
