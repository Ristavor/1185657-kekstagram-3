import { getData } from './server.js';
import { renderPhotos } from './render-photos.js';
import { addUploadWindow } from './upload-window.js';

const showErrorMessage = (error) => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorWindow = errorTemplate.cloneNode(true);
  const errorMessage = errorWindow.querySelector('.error__title');
  errorMessage.style.lineHeight = '50px';
  errorMessage.textContent = 'Возникла ошибка при загрузке страницы. Пожалуйста, повторите попытку позднее';
  errorWindow.querySelector('.error__button').textContent = error;
  const body = document.querySelector('body');
  body.appendChild(errorWindow);
};

getData()
  .then((photos) => renderPhotos(photos))
  .catch((error) => {
    showErrorMessage(error);
  });

addUploadWindow();
