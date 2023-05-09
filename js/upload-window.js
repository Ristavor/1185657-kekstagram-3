import { addStyleListeners, addScaleListeners } from './upload-effects.js';
import { getPristine } from './upload-validator.js';
import { getErrorWindow, getSuccessWindow } from './upload-err-suc.js';
import { sendData } from './server.js';

const addUploadWindow = () => {
  const bodyElement = document.querySelector('body');
  const imgFormElement = document.querySelector('.img-upload__form');
  const imgUploadInputElement = imgFormElement.querySelector('.img-upload__input');
  const imgUploadOverlayElement = imgFormElement.querySelector('.img-upload__overlay');

  const errorWindowElement = getErrorWindow();
  const successWindowElement = getSuccessWindow();
  bodyElement.appendChild(errorWindowElement);
  bodyElement.appendChild(successWindowElement);
  errorWindowElement.querySelector('.error__button').addEventListener('click', () => {
    imgUploadOverlayElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
  });


  const closeWindow = () => {
    const imgUploadPreviewElement = imgFormElement.querySelector('.img-upload__preview');
    imgUploadPreviewElement.style.scale = '1';
    imgUploadPreviewElement.classList.value = 'img-upload__preview effects__preview--none';
    imgUploadOverlayElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    imgUploadInputElement.value = '';
    imgFormElement.querySelector('.scale__control--value').value = '100%';
    imgFormElement.querySelector('.text__description').value = '';
    imgFormElement.querySelector('.text__hashtags').value = '';
    imgFormElement.querySelector('#effect-none').checked = true;
  };
  const handleClose = () => {
    closeWindow();
  };

  errorWindowElement.addEventListener('click', (evt) => {
    if (evt.target !== errorWindowElement.querySelector('.success__inner') && evt.target !== errorWindowElement.querySelector('h2')) {
      handleClose();
    }
  });

  imgUploadInputElement.addEventListener('change', () => {
    imgUploadOverlayElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    imgFormElement.querySelector('#effect-none').checked = true;
  });

  imgFormElement.querySelector('.img-upload__cancel').addEventListener('click', handleClose);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      handleClose();
      errorWindowElement.classList.add('hidden');
      successWindowElement.classList.add('hidden');
    }
  });

  addScaleListeners();
  addStyleListeners();

  const pristine = getPristine();
  const submit = (form) => {
    const isValid = pristine.validate();
    if (isValid) {
      imgUploadOverlayElement.classList.add('hidden');
      bodyElement.classList.remove('modal-open');
      imgUploadInputElement.disabled = true;
      sendData(form)
        .then(() => {
          handleClose();
          successWindowElement.classList.remove('hidden');
          imgUploadInputElement.disabled = false;
        })
        .catch(() => {
          errorWindowElement.classList.remove('hidden');
          imgUploadInputElement.disabled = false;
        });
    }
  };
  const handeSubmmit = (to) => {
    submit(to);
  };
  imgFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const from = new FormData(evt.target);
    handeSubmmit(from);
  });
};

export { addUploadWindow };
