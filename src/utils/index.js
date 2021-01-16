/**
 * @param {*} arr - length must be > 1
 * @return - random element from array
 */
export const getRandomElement = (arr) => {
  if (Array.isArray(arr) && arr.length > 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  } else {
    console.warn("Argument must be typeof Array and Array.length > 1");
  }
};
