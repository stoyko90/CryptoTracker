const Binance = require('binance-api-node').default;
const {User} = require('../models/userModel');
const {Crypto} = require('../models/cryptoModel');

async function binanceAccountApi(req, res) {
  const {key, secret} = await req.body;
  const user = await User.findOneAndUpdate({userName: req.user.userName}, {binanceKey: key, binanceSecret: secret}, {new: true});

  const client = Binance({
    apiKey: user.binanceKey,
    apiSecret: user.binanceSecret
  });

  client.accountInfo().then(async (data) => {
    user.assets = [];
    for (let i = 0; i < data.balances.length; i++) {
      const crypto = data.balances[i];

      const filter = {owner: user.userName, asset: crypto.asset};
      const update = {amount: crypto.free};
      
      const newCrypto = await Crypto.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
      }); 
      user.assets.push(newCrypto._id);
    }
    await user.save();
    res.send(data);
  })       
}
    
    module.exports = {binanceAccountApi};
