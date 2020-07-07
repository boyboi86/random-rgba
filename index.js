var randomInt = require("@dmhtoo/random-int");

/**
 * Generate a string in the CSS format `rgba(r, g, b, a)` with random values.
 * @param {number} alpha - optional opacity value: defaults to a random percentage
 */
const randomRgba = (alpha) => {
  const a = !isNaN(alpha)
    ? Math.min(Math.max(Number(alpha), 1), 100)
    : randomInt(1, 100);
  return `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
    0,
    255
  )},.${a})`;
};

module.exports = randomRgba;
