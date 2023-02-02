const ethers = require('@vechain/ethers')
const bent = require('bent')
const cliProgress = require('cli-progress');

const nodeUrl = 'https://mainnet.veblocks.net'

const getAccount = bent('GET', `${nodeUrl}/accounts/`, 'json')

async function main() {
  if (!process.env.WORDS) {
    throw new Error('Call with WORDS="<mnemonic words>" node combination-of-words.js')
  }

  const words = process.env.WORDS.split(' ')
    .map(word => String(word).trim())
    .filter(word => word !== '')

  await generateCombinations(words)
}


function getAddressForCombination(words) {
  const wallet = ethers.Wallet.fromMnemonic(words.join(' '), "m/44'/818'/0'/0/0");
  return String(wallet.address)
}

async function generateCombinations(words) {
  const progressBar = new cliProgress.SingleBar({ format: 'progress [{bar}] {percentage}% | {value}/{total} | {words}' }, cliProgress.Presets.shades_classic);
  progressBar.start(factorial(words.length))

  const combinations = [];

  const combinationHelper = async (currentCombination, remainingWords) => {
    if (remainingWords.length === 0) {
      try {
        progressBar.increment({ words: currentCombination.join(' ') });
        const address = getAddressForCombination(currentCombination)
        const { balance } = await getAccount(address)
        if (balance !== '0x0') {
          console.log('\n', address, currentCombination.join(' '), balance)
        }
      }
      catch (err) {
        if (err.message !== 'invalid checksum') {
          console.log(err)
        }
      }
      return;
    }
    for (let i = 0; i < remainingWords.length; i++) {
      await combinationHelper(
        currentCombination.concat(remainingWords[i]),
        remainingWords.slice(0, i).concat(remainingWords.slice(i + 1))
      );
    }
  };

  await combinationHelper([], words);

  return combinations;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}



main()
  .then(() => process.exit(0))
  .catch(console.error)