Snippets on how to extract the private key from Sync1 and Sync2 backups

# Sync2

Write down the memnonic words and use `memnonic-to-pk.js`:

```shell
$ WORDS="ceiling exhaust wink burger glory unique burger supply foam enable axis coil" node memnonic-to-pk.js 

Wallet {
  signingKey: SigningKey {
    mnemonic: 'ceiling exhaust wink burger glory unique burger supply foam enable axis coil',
    path: "m/44'/818'/0'/0/0",
    privateKey: '0xa72f2e7d9ce4a2c314e1cf7b068e9bf9e53293825680dd7e119f7d0f8a440d9d',
    keyPair: KeyPair {
      privateKey: '0xa72f2e7d9ce4a2c314e1cf7b068e9bf9e53293825680dd7e119f7d0f8a440d9d',
      publicKey: '0x04444d201f12ec91785fa9a718dd9912054ae4aacf5261f568783166ca445027800c27f57e43a438747e713d8de19c2e843f302a42d799939f0bab315953ad95a2',
      compressedPublicKey: '0x02444d201f12ec91785fa9a718dd9912054ae4aacf5261f568783166ca44502780',
      publicKeyBytes: [Array]
    },
    publicKey: '0x04444d201f12ec91785fa9a718dd9912054ae4aacf5261f568783166ca445027800c27f57e43a438747e713d8de19c2e843f302a42d799939f0bab315953ad95a2',
    address: '0x02F887bea6275318cC79c0639Db9e3037e216e49'
  },
  provider: undefined
}
```

# Sync1

Backup the Keystore into a file and use `keystore-to-pk.js`:

```shell
$ KEYSTORE=./keystore.json PASSWORD="123456" node keystore-to-pk.js

Wallet {
  signingKey: SigningKey {
    privateKey: '0xdce1443bd2ef0c2631adc1c67e5c93f13dc23a41c18b536effbbdcbcdb96fb65',
    keyPair: KeyPair {
      privateKey: '0xdce1443bd2ef0c2631adc1c67e5c93f13dc23a41c18b536effbbdcbcdb96fb65',
      publicKey: '0x0465e790f6065164e2f610297b5358b6c474f999fb5b4d2574fcaffccb59342c1f6f28f0b684ec97946da65cd08a1b9fc276f79d90caed80e56456cebbc165938e',
      compressedPublicKey: '0x0265e790f6065164e2f610297b5358b6c474f999fb5b4d2574fcaffccb59342c1f',
      publicKeyBytes: [Array]
    },
    publicKey: '0x0465e790f6065164e2f610297b5358b6c474f999fb5b4d2574fcaffccb59342c1f6f28f0b684ec97946da65cd08a1b9fc276f79d90caed80e56456cebbc165938e',
    address: '0x7567D83b7b8d80ADdCb281A71d54Fc7B3364ffed'
  },
  provider: undefined
}
```