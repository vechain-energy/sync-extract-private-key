const ethers = require('@vechain/ethers')

const wallet = ethers.Wallet.createRandom({ path: "m/44'/818'/0'/0/0" })
console.log(wallet)