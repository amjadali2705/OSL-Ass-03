import portfoliodetails from './portfoliodetails.twig';
import portfoliodetailsData from './portfoliodetails.yml';
import './portfoliodetails';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/portfoliodetails' };

export const portfoliodetail = () => portfoliodetails(portfoliodetailsData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
