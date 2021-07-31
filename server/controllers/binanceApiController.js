const Binance = require('binance-api-node').default;
const {User, Crypto} = require('../models/userModel');

async function binanceAccountApi(req, res) {
  console.log(await req.body);
  const {key, secret} = await req.body;
  const client = Binance({
    apiKey: key,
    apiSecret: secret
  });

  client.accountInfo().then(data => {
    // console.log(data.balances);
    res.send();
  }) 
}

module.exports = {binanceAccountApi};