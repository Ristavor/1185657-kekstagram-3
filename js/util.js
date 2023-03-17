function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const getRandomItem = (items) => items[getRandomPositiveInteger(0, items.length - 1)];

function checkStringLength (string, length) {
  return string.length <= length;
}

export { getRandomPositiveInteger, getRandomItem, checkStringLength };
