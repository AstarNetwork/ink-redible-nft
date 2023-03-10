import { createNumberArray } from 'src/modules/common';

describe('createNumberArray', () => {
  it('returns an array of numbers from 1 to the input number', () => {
    expect(createNumberArray(3)).toEqual([1, 2, 3]);
    expect(createNumberArray(5)).toEqual([1, 2, 3, 4, 5]);
    expect(createNumberArray(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('returns an empty array if the input number is 0', () => {
    expect(createNumberArray(0)).toEqual([]);
  });
});
