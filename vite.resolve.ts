import { resolve } from 'path';
import type { AliasOptions } from 'vite';

type AliasObject = {
  find: string;
  replacement: string;
};

const generateAliasList = (names: string[]): AliasObject[] => {
  let newList: AliasObject[] = [];
  let i = 0;
  let len = names.length;
  while (i < len) {
    newList.push({
      find: names[i],
      replacement: resolve(__dirname, 'src', names[i]),
    });
    i++;
  }
  return newList;
};

export const aliasList: AliasOptions = [
  ...generateAliasList([
    'appConstants',
    'assets',
    'components',
    'context',
    'controllers',
    'helpers',
    'hooks',
    'layouts',
    'lib',
    'routes',
    'services',
    'stores',
    'stories',
    'styleguide',
    'themeProviders',
    'types',
    'UI',
    'utils',
    'views',
  ]),
  { find: '@', replacement: resolve(__dirname, 'src') },
  { find: 'process', replacement: 'process/browser' },
  { find: 'stream', replacement: 'stream-browserify' },
  { find: 'zlib', replacement: 'browserify-zlib' },
  { find: 'util', replacement: 'util' },
];
