import '/pristine/Pristine.min.js';
const imgForm = document.querySelector('.img-upload__form');
const hashTagReg = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,19}$');

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});

const validateHashTag = function (value) {
  return hashTagReg.test(value) || value === '';
};

const validateComment = function (value) {
  return value.length >= 20 && value.length <= 140;
};

pristine.addValidator(
  imgForm.querySelector('.text__hashtags'),
  validateHashTag,
  'ХэшТег должен начинаться с # и содержать только цифры и буквы латинского и русского алфавитов'
);

pristine.addValidator(
  imgForm.querySelector('.text__description'),
  validateComment,
  'Комментарий обязателен и должен быть длиной от 20 до 140 символов'
);

imgForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
