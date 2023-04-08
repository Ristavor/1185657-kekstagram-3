import '/nouislider/nouislider.js';

const imgForm = document.querySelector('.img-upload__form');
const scaleButtonSmaller = imgForm.querySelector('.scale__control--smaller');
const scaleButtonBigger = imgForm.querySelector('.scale__control--bigger');
const scaleControlValue = imgForm.querySelector('.scale__control--value');
const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
const effectLevel = imgForm.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

document.querySelector('.img-upload__effect-level').classList.add('hidden');

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

sliderElement.noUiSlider.on('update', () => {
  effectLevel.value = sliderElement.noUiSlider.get();
});

