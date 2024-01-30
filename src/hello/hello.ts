import { create } from 'mutative';

export function hello() {
  return 'Hello, world!';
}

export function id<T>(x: T): T {
  return create(x, (draft) => {
    draft; // just pass
  });
}
