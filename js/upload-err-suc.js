const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorWindowElement = errorTemplate.cloneNode(true);
const errorWindowInnerElement = errorWindowElement.querySelector('.error__inner');
const errorWindowTitleElement = errorWindowElement.querySelector('h2');
errorWindowElement.addEventListener('click', (evt) => {
  if (evt.target !== errorWindowInnerElement && evt.target !== errorWindowTitleElement) {
    errorWindowElement.classList.add('hidden');
  }
});
errorWindowElement.classList.add('hidden');
const errorButtonElement = errorWindowElement.querySelector('.error__button');
errorButtonElement.addEventListener('click', () => {
  errorWindowElement.classList.add('hidden');
});

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successWindowElement = successTemplate.cloneNode(true);
const successWindowInnerElement = successWindowElement.querySelector('.success__inner');
const successWindowTitleElement = successWindowElement.querySelector('h2');
successWindowElement.addEventListener('click', (evt) => {
  if (evt.target !== successWindowInnerElement && evt.target !== successWindowTitleElement) {
    successWindowElement.classList.add('hidden');
  }
});
successWindowElement.classList.add('hidden');
const successButtonElement = successWindowElement.querySelector('.success__button');
successButtonElement.addEventListener('click', () => {
  successWindowElement.classList.add('hidden');
});

const getErrorWindow = () => errorWindowElement;
const getSuccessWindow = () => successWindowElement;

export {getErrorWindow, getSuccessWindow};
