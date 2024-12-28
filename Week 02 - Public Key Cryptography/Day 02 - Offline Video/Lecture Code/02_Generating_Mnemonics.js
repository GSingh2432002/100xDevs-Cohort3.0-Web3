import bip39 from 'bip39';

const { generateMnemonic } = bip39;

// Generate a 12-word mnemonic
const mnemonic = generateMnemonic();
console.log('Generated Mnemonic:', mnemonic);
