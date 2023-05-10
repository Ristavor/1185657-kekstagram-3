const getData = () => fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status}`);
  })
  .then((response) => response.json());

const sendData = (form) => fetch(
  'https://27.javascript.pages.academy/kekstagram-simple',
  {
    method: 'POST',
    body: form,
  })
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status} — ${response.statusText}`);
  });


export { getData, sendData };
