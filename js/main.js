function getRandomNumber(min, max) {
  if (min > max || min < 0 || max < 0) {
    return 'Ошибка: неверный диапазон чисел';
  }
  if (min === max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
}
