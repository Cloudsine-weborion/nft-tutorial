const axios = require('axios');

let config = {
    method: 'get',
    url: 'https://api.nodesine.com/nft/eth/balance?contract=0x25121a02daD20b16F0505cb022eF98237647CA13&network=goerli&owner=0xE8d18bC2A35367c10441Aa30c48288b81231FE9d',
    headers: {
        'Accept': 'application/json',
        'access_token': 'accesstoken'
    }
};

axios(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });