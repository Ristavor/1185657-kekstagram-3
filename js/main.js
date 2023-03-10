// Функция взята от Кекса

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

function generatePhoto (i, desc) {
  const photo = {
    id: i,
    url: `photos/${i}.jpg`,
    description: desc,
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
  return photo;
}

function generate25Photos () {
  const photos = [];
  for (let i = 1; i <= 25; i++){
    photos.push(generatePhoto(i, `Photo №${i}`));
  }
}

checkStringLength('25', 5);
generate25Photos();
