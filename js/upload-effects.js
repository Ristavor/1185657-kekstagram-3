const imgForm = document.querySelector('.img-upload__form');
const scaleButtonSmaller = imgForm.querySelector('.scale__control--smaller');
const scaleButtonBigger = imgForm.querySelector('.scale__control--bigger');
const scaleControlValue = imgForm.querySelector('.scale__control--value');
const imgUploadPreview = imgForm.querySelector('.img-upload__preview');


scaleButtonSmaller.addEventListener('click', () => {
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
  styles[i].addEventListener('click', () => {
    imgUploadPreview.classList.value = `img-upload__preview ${  styles[i].querySelector('.effects__preview').classList[1]}`;
  });
}
