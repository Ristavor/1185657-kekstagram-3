

const imgForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgForm.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const scaleButtonSmaller = imgForm.querySelector('.scale__control--smaller');
const scaleButtonBigger = imgForm.querySelector('.scale__control--bigger');
const scaleControlValue = imgForm.querySelector('.scale__control--value');


imgUploadInput.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  imgUploadPreview.style.scale = '1';
  imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
  scaleControlValue.value = '100%';
  imgForm.querySelector('.text__description').value = '';
});

const uploadCancelButton = imgForm.querySelector('.img-upload__cancel');
uploadCancelButton.addEventListener('click', () => {
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadInput.value = '';
  imgUploadPreview.style.scale = '1';
  imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
  scaleControlValue.value = '100%';
  imgForm.querySelector('.text__description').value = '';
});
imgForm.addEventListener('submit', () => {
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadInput.value = '';
  imgUploadPreview.style.scale = '1';
  imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
  scaleControlValue.value = '100%';
  imgForm.querySelector('.text__description').value = '';
});
document.addEventListener('keydown', (evt) => {
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  if (evt.key === 'Escape') {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadInput.value = '';
    imgUploadPreview.style.scale = '1';
    imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
    scaleControlValue.value = '100%';
    imgForm.querySelector('.text__description').value = '';
  }
});


scaleButtonSmaller.addEventListener('click', () => {
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  let percent = parseInt(scaleControlValue.value, 10);
  if (percent - 25 < 25) {
    percent = '25%';
  } else {
    percent = `${  percent - 25  }%`;
  }
  imgUploadPreview.style.scale = parseInt(percent, 10) / 100;
  scaleControlValue.value = percent;
});

scaleButtonBigger.addEventListener('click', () => {
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  let percent = parseInt(scaleControlValue.value, 10);
  if (percent + 25 > 100) {
    percent = '100%';
  } else {
    percent = `${  percent + 25  }%`;
  }
  imgUploadPreview.style.scale = parseInt(percent, 10) / 100;
  scaleControlValue.value = percent;
});

const styles = imgForm.querySelectorAll( '.effects__item');
for (let i = 0; i < styles.length; i++){
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  styles[i].addEventListener('click', () => {
    imgUploadPreview.classList.value = `img-upload__preview ${  styles[i].querySelector('.effects__preview').classList[1]}`;
  });
}

