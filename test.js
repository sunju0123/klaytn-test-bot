// copy&past&run this code at https://scope.klaytn.com/ console

getData('https://api-cypress-v2.scope.klaytn.com/v2/stats')
  .then((data) => {
    const { result } = data;
    console.log(result.blockNumber);
  })
  .catch((error) => console.error(error));

function getData(url = '', data = {}) {
  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
  }).then((response) => response.json());
}

// setInterval(() => {
//   getData();
// }, 1000);
