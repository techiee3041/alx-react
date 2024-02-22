import { List, Map } from './node_modules/immutable/dist/immutable';

const concatElements = (page1, page2) => List(page1).concat(List(page2));

const mergeElements = (page1, page2) => Map(page1).concat(Map(page2));

export { concatElements, mergeElements };
