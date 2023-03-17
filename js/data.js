import { getRandomItem } from './util.js';

const PHOTOS_COUNT = 25;
const DESCRIPTIONS = ['a', 'b', 'c', 'd', 'e'];

const generatePhoto = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: getRandomItem(DESCRIPTIONS),
});

const generatePhotos = () => Array.from({ length: PHOTOS_COUNT }, (_, index) => generatePhoto(index));

export { generatePhotos };
