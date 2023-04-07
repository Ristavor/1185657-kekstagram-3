import './upload-effects.js';
import {  getPristine  } from './upload-validator.js';


const body = document.querySelector('body');
const imgForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgForm.querySelector('.img-upload__overlay');
const uploadCancelButton = imgForm.querySelector('.img-upload__cancel');
const scaleControlValue = imgForm.querySelector('.scale__control--value');


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
  }
});

const pristine = getPristine();
const submitter = () => {
  const post = new FormData();
  post.append('filename', imgUploadInput.value);
  post.append('scale', scaleControlValue.value);
  post.append('effect-level', '');
  post.append('effect', 'none');
  post.append('hashtags', imgForm.querySelector('.text__hashtags').value);
  post.append('description', imgForm.querySelector('.text__description').value);
  const isValid = pristine.validate();
  if (isValid) {
    fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: post,
      })
      .then((response) => console.log(response));
  }
};
const submitHandler = () => {
  submitter();
};
imgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitHandler();
});

