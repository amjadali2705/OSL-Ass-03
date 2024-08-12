import paragraph from './paragraph.twig';
import paragraphData from './paragraph.yml';

export default { title: 'Atoms/paragraph' };

export const twig = () => paragraph(paragraphData);
