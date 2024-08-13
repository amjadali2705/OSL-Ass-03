import projectinformation from './projectinformation.twig';
import projectinformationData from './projectinformation.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/projectinformation' };
export const projectinformations = () =>
  projectinformation(projectinformationData);
