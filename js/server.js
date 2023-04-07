import {  renderPhotos  } from './render-photos.js';


fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .then((photos) => renderPhotos(photos))
  .catch((error) => {
    const errorTemplate = document.querySelector('#error').content.querySelector('.error');
    const errorWindow = errorTemplate.cloneNode(true);
    const errorMessage = errorWindow.querySelector('.error__title');
    errorMessage.style.lineHeight = '50px';
    errorMessage.textContent = 'Возникла ошибка при загрузке страницы. Пожалуйста, повторите попытку позднее';
    errorWindow.querySelector('.error__button').textContent = error;
    const body = document.querySelector('body');
    body.appendChild(errorWindow);
  });


