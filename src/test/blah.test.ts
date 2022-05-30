import { sum, minimal } from '../src';

describe('Sum', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('Minimal', () => {
  it('works', () => {
    expect(minimal(1, 2)).toEqual(1);
  });
});