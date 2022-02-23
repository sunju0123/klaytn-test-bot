const axios = require('axios');

const consoleBlockHeight = () => {
  axios
    .get('https://api.blocksdk.com/v2/klay/info', {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Token': 'zH9MH33R0eSRIOXJGCnOsDldpoZxTRPl6ph4AYL4',
      },
    })
    .then((response) => {
      console.log(`response`, response.data.payload.last_block_height);
    })
    .catch((error) => console.error(error));
};

let timerId = setInterval(() => {
  consoleBlockHeight();
}, 300);

// 5초 후에 정지
setTimeout(() => {
  clearInterval(timerId);
}, 5000);
