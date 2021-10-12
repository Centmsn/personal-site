/**
 * Function takes array and return random element from the given array
 * @param {Array} arr - length must be >1
 * @return - random element from array
 */
const getRandomElement = arr => {
  if (Array.isArray(arr) && arr.length > 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  } else {
    console.warn("Argument must be typeof Array and Array.length > 1");
  }
};

export { getRandomElement };
