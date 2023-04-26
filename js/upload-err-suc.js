const body = document.querySelector('body');
const imgForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgForm.querySelector('.img-upload__overlay');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorWindow = errorTemplate.cloneNode(true);
const errorWindowInner = errorWindow.querySelector('.success__inner');
const errorWindowTitle = errorWindow.querySelector('h2');
errorWindow.addEventListener('click', (evt) => {
  if (evt.target !== errorWindowInner && evt.target !== errorWindowTitle) {
    errorWindow.classList.add('hidden');
  }
});
errorWindow.classList.add('hidden');
body.appendChild(errorWindow);
const errorButton = errorWindow.querySelector('.error__button');
errorButton.addEventListener('click', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  errorWindow.classList.add('hidden');
});

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successWindow = successTemplate.cloneNode(true);
const successWindowInner = successWindow.querySelector('.success__inner');
const successWindowTitle = successWindow.querySelector('h2');
successWindow.addEventListener('click', (evt) => {
  if (evt.target !== successWindowInner && evt.target !== successWindowTitle) {
    successWindow.classList.add('hidden');
  }
});
successWindow.classList.add('hidden');
body.appendChild(successWindow);
const successButton = successWindow.querySelector('.success__button');
successButton.addEventListener('click', () => {
  successWindow.classList.add('hidden');
});

