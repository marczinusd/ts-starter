import { describe, expect, it } from 'vitest';
import { hello } from './hello';

describe('hello', () => {
  it("should return 'Hello, world!'", () => {
    expect(hello()).toBe('Hello, world!');
  });
});
