export const generateRandomNumber = (min = 0, max?: number) => {
  return Math.random() * (max || 1 - min) + min;
};
