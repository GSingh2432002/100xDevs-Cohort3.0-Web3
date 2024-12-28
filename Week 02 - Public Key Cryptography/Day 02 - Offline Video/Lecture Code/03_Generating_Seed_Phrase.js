import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonic = generateMnemonic();

const seed = mnemonicToSeedSync(mnemonic);
console.log("Generated Mnemonic:", seed);