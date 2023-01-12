const ethers = require('@vechain/ethers')

try {
  if (!process.env.KEYSTORE || !process.env.PASSWORD) {
    throw new Error('Call with KEYSOTRE=<file> node keystore-to-pk.js')
  }

  ethers.Wallet.fromEncryptedJson(require('fs').readFileSync(process.env.KEYSTORE), process.env.PASSWORD).then(wallet => {
    console.log(wallet)
  })
}
catch (err) {
  console.error(err.message)
}
