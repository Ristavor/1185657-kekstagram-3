const enablePhotoLoad = function() {
  const imgForm = document.querySelector('.img-upload__form');
  const imgUploadInput = imgForm.querySelector('.img-upload__input');
  const imgUploadOverlay = imgForm.querySelector('.img-upload__overlay');
  const body = document.querySelector('body');
  imgUploadInput.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  });
  const uploadCancelButton = imgForm.querySelector('.img-upload__cancel');
  uploadCancelButton.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadInput.value = '';
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      imgUploadOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
      imgUploadInput.value = '';
    }
  });

};

export { enablePhotoLoad };
