import { bench } from 'vitest';
import { id } from './hello';

describe('hello', () => {
  bench('id', () => {
    id(300);
  });
});
