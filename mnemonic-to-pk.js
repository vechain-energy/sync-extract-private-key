const ethers = require('@vechain/ethers')

try {
  if (!process.env.WORDS) {
    throw new Error('Call with WORDS="<mnemonic words>" node mnemonic-to-pk.js')
  }

  const wallet = ethers.Wallet.fromMnemonic(process.env.WORDS, "m/44'/818'/0'/0/0");
  console.log(wallet)
}
catch (err) {
  console.error(err.message)
}

