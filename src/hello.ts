export function hello() {
  return 'Hello, world!';
}

export function id<T>(x: T): T {
  return x;
}
