const ethers = require('@vechain/ethers')

try {
  if (!process.env.PRIVATE_KEY) {
    throw new Error('Call with PRIVATE_KEY="<private key>" node dump-from-pk.js')
  }

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, "m/44'/818'/0'/0/0");
  console.log(wallet)
}
catch (err) {
  console.error(err.message)
}

