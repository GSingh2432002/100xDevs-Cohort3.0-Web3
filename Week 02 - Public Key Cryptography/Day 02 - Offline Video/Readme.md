# Hierarchical Deterministic (HD) Wallet

HD wallets generate a tree of key pairs from a single seed, allowing users to manage multiple addresses from one root seed.

## Problem
Traditionally, maintaining multiple wallets required storing multiple public-private key pairs. This is cumbersome and risky, as losing any one of these keys can result in the loss of associated funds.

## Solution - BIP-32
Bitcoin Improvement Proposal 32 (BIP-32), introduced by Bitcoin Core developer Pieter Wuille in 2012, addresses this problem by standardizing the derivation of private and public keys from a single master seed. BIP-32 introduced the concept of hierarchical deterministic (HD) wallets, which use a tree-like structure to manage multiple accounts easily.

## How to Create an HD Wallet

### Mnemonics
A mnemonic phrase, or seed phrase, is a human-readable sequence of words used to generate a cryptographic seed. BIP-39 (an improvement to BIP-32) defines how mnemonic phrases are generated and converted into a seed.

#### Example Code to Generate a Mnemonic:
```javascript
import { generateMnemonic } from 'bip39';

// Generate a 12-word mnemonic
const mnemonic = generateMnemonic();
console.log('Generated Mnemonic:', mnemonic);
```

### Seed Phrase
The seed is a binary number derived from the mnemonic phrase. This seed is used to generate the master private key.

#### Example Code to Generate a Seed from a Mnemonic:
```javascript
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonic = generateMnemonic();
console.log("Generated Mnemonic:", mnemonic);
const seed = mnemonicToSeedSync(mnemonic);
```

### Derivation Paths
1. Derivation paths specify a systematic way to derive various keys from the master seed.
2. They allow users to recreate the same set of addresses and private keys from the seed across different wallets, ensuring interoperability and consistency.
3. A derivation path is typically expressed in a format like:

   `m / purpose' / coin_type' / account' / change / address_index`

   - **m**: Refers to the master node, or the root of the HD wallet.
   - **purpose**: A constant that defines the purpose of the wallet (e.g., 44' for BIP44, which is a standard for HD wallets).
   - **coin_type**: Indicates the type of cryptocurrency (e.g., 0' for Bitcoin, 60' for Ethereum, 501' for Solana).
   - **account**: Specifies the account number (e.g., 0' for the first account).
   - **change**: This is either 0 or 1, where 0 typically represents external addresses (receiving addresses), and 1 represents internal addresses (change addresses).
   - **address_index**: A sequential index to generate multiple addresses under the same account and change path.

#### Example Code for Deriving Paths and Generating Keys:
```javascript
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic);

for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`; // Derivation path for Solana
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}
```