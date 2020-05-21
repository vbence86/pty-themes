import { preiviewHTML } from '../../helpers';

export default { title: 'Typography' };

export const Headers = () =>
  [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ].map(tagName => preiviewHTML(`
    <${tagName}>${tagName} Lorem ipsum dolor sit amet</${tagName}>
  `))
  .join('');

