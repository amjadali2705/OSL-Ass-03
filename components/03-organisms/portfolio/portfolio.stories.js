import portfolio from './portfolio.twig';
import portfolioData from './portfolio.yml';
import './portfolio';
// import gridCardData from './grid-cards.yml';
// import gridCtaData from './grid-ctas.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/portfolio' };

export const portfolios = () => portfolio(portfolioData);

// export const cardGrid = () => grid({ ...gridData, ...gridCardData });

// export const ctaGrid = () => grid({ ...gridData, ...gridCtaData });
