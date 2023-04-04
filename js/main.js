import { checkStringLength } from './util.js';
import { renderPhotos } from './render.js';
import { enablePhotoLoad } from './picload.js';

checkStringLength('25', 5);
renderPhotos();
enablePhotoLoad();
