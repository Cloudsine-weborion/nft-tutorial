const axios = require('axios');

let config = {
    method: 'get',
    url: 'https://api.nodesine.com/nft/eth/owner?contract=0x25121a02daD20b16F0505cb022eF98237647CA13&network=goerli&token_id=0',
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