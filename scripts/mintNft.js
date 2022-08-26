require("dotenv").config()
const { PRIVATE_KEY, RPC_URL, ADDRESS } = process.env

const Web3 = require('web3');
const web3 = new Web3(RPC_URL);

// load the compiled contract
const contract = require("../artifacts/contracts/MyToken.sol/MyToken.json")
const contract_address = "0x25121a02daD20b16F0505cb022eF98237647CA13"
const nft = new web3.eth.Contract(contract.abi, contract_address)

async function mintNFT(recipients, tokenURI) {
    const nonce = await web3.eth.getTransactionCount(ADDRESS, 'latest')
    const tx = {
        'from': ADDRESS,
        'to': contract_address,
        'nonce': nonce,
        'gas': 5000000,
        'data': nft.methods.safeMint(recipients, tokenURI).encodeABI()
    }
    await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY).then((signedTx) => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, (err, hash) => {
            if (err) {
                console.log("Something went wrong when submitting transaction: ", err)
            } else {
                console.log("The hash of transaction is: ", hash)
            }
        })
    })
}

mintNFT('0xE8d18bC2A35367c10441Aa30c48288b81231FE9d', 'ipfs://QmPND9CETXyt66ZJaKa55E2Fz1BKinxNt1ohaDn6u1rE9f')
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })