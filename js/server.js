const getData = () => fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }

    throw new Error(`${response.status}`);
  })
  .then((response) => response.json());

export { getData };
