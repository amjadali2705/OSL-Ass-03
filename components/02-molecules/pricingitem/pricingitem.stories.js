import pricingitem from './pricingitem.twig';
import pricingitemData from './pricingitem.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/pricingitem' };

export const pricingitems = () => pricingitem(pricingitemData);
