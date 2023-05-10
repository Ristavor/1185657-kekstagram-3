const imgFormElement = document.querySelector('.img-upload__form');
const scaleButtonSmallerElement = imgFormElement.querySelector('.scale__control--smaller');
const scaleButtonBiggerElement = imgFormElement.querySelector('.scale__control--bigger');
const scaleControlValueElement = imgFormElement.querySelector('.scale__control--value');
const imgUploadPreviewElement = imgFormElement.querySelector('.img-upload__preview');

document.querySelector('.img-upload__effect-level').classList.add('hidden');

const addScaleListeners = () => {
  scaleButtonSmallerElement.addEventListener('click', () => {
    let percent = parseInt(scaleControlValueElement.value, 10);
    if (percent - 25 < 25) {
      percent = '25%';
    } else {
      percent = `${  percent - 25  }%`;
    }
    imgUploadPreviewElement.style.scale = parseInt(percent, 10) / 100;
    scaleControlValueElement.value = percent;
  });

  scaleButtonBiggerElement.addEventListener('click', () => {
    let percent = parseInt(scaleControlValueElement.value, 10);
    if (percent + 25 > 100) {
      percent = '100%';
    } else {
      percent = `${  percent + 25  }%`;
    }
    imgUploadPreviewElement.style.scale = parseInt(percent, 10) / 100;
    scaleControlValueElement.value = percent;
  });
};


const addStyleListeners = () => {
  const styleElements = imgFormElement.querySelectorAll( '.effects__item');
  for (let i = 0; i < styleElements.length; i++){
    styleElements[i].addEventListener('click', () => {
      styleElements[i].checked = true;
      imgUploadPreviewElement.classList.value = `img-upload__preview ${  styleElements[i].querySelector('.effects__preview').classList[1]}`;
    });
  }
};

export {addScaleListeners, addStyleListeners};
