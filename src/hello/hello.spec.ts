import { describe, expect, it, test } from 'vitest';
import { hello, id } from './hello';

describe('hello', () => {
  it("should return 'Hello, world!'", () => {
    expect(hello()).toBe('Hello, world!');
  });

  test.each([
    [1, 1],
    ['bla', 'bla'],
    [[], []],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ])('id(%s) should return %s', (a, expected) => {
    expect(id(a)).toStrictEqual(expected);
  });
});
