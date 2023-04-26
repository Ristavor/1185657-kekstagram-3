import { addStyleListeners, addScaleListeners } from './upload-effects.js';
import { getPristine } from './upload-validator.js';
import { getErrorWindow, getSuccessWindow } from './upload-err-suc.js';
import { sendData } from './server.js';

const body = document.querySelector('body');
const imgForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgForm.querySelector('.img-upload__overlay');
const uploadCancelButton = imgForm.querySelector('.img-upload__cancel');
const scaleControlValue = imgForm.querySelector('.scale__control--value');

const errorWindow = getErrorWindow();
const successWindow = getSuccessWindow();
body.appendChild(errorWindow);
body.appendChild(successWindow);
errorWindow.querySelector('.error__button').addEventListener('click', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

const closeWindow = () => {
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  imgUploadPreview.style.scale = '1';
  imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadInput.value = '';
  scaleControlValue.value = '100%';
  imgForm.querySelector('.text__description').value = '';
  imgForm.querySelector('.text__hashtags').value = '';
};
const closeHandler = () => {
  closeWindow();
};

imgUploadInput.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

uploadCancelButton.addEventListener('click', closeHandler);
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeHandler();
    errorWindow.classList.add('hidden');
    successWindow.classList.add('hidden');
  }
});

addScaleListeners();
addStyleListeners();

const pristine = getPristine();
const submitter = (form) => {
  const isValid = pristine.validate();
  if (isValid) {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadInput.disabled = true;
    sendData(form)
      .then(() => {
        closeHandler();
        successWindow.classList.remove('hidden');
        imgUploadInput.disabled = false;
      })
      .catch(() => {
        errorWindow.classList.remove('hidden');
        imgUploadInput.disabled = false;
      });
  }
};
const submitHandler = (to) => {
  submitter(to);
};
imgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const from = new FormData(evt.target);
  submitHandler(from);
});

