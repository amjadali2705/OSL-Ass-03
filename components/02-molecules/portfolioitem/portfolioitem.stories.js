import portfolioitem from './portfolioitem.twig';
import portfolioitemData from './portfolioitem.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/portfolioitem' };

export const portfolioitems = () => portfolioitem(portfolioitemData);
