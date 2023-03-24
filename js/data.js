import { getRandomItem } from './util.js';
import { getRandomPositiveInteger } from './util.js';

const PHOTOS_COUNT = 25;
const DESCRIPTIONS = ['a', 'b', 'c', 'd', 'e'];

const generatePhoto = (i) => ({
  id: i,
  url: `photos/${i + 1}.jpg`,
  description: getRandomItem(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

const generatePhotos = () => Array.from({ length: PHOTOS_COUNT }, (_, index) => generatePhoto(index));

export { generatePhotos };
