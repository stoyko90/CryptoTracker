const Binance = require('binance-api-node').default;
const {User, Crypto} = require('../models/userModel');

async function binanceAccountApi(req, res) {
  const {key, secret} = await req.body;
  const user = await User.findOneAndUpdate({userName: req.user.userName}, {binanceKey: key, binanceSecret: secret});

  const client = Binance({
    apiKey: user.binanceKey,
    apiSecret: user.binanceSecret
  });

  client.accountInfo().then(data => {
    // console.log(data.balances);
    for (let crypto of data.balances) {
        const newCrypto = new Crypto({owner: user.userName, asset: crypto.asset, amount: crypto.free});
        newCrypto.save();
      }
    }) 
    // const user2 = await User.findOne({userName: user.userName}).populate('assets').exec();
    // console.log(user2);
    await User.findOne({userName: 'stoyko90'}).populate({
      path: 'assets',
      model: 'Crypto'
    }).exec((err, data) => {
      if (err) return handleError(err);
      console.log(data.populate('assets'));
    });
  res.send('YOOOOO');
}

module.exports = {binanceAccountApi};