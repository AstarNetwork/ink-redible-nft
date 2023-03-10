export const createNumberArray = (num: number): number[] => {
  const numberArray: number[] = [];
  for (let i = 1; i <= num; i++) {
    numberArray.push(i);
  }
  return numberArray;
};
