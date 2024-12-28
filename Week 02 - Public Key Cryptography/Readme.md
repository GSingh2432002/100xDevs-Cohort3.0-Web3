# How Blockchains Do Authentication

## Public-Private Keypair

Blockchain accounts are secured through a public-private keypair.

### Public-Private Keypair
A public-private keypair consists of two keys used in asymmetric cryptography.

### Public Key
- The public key is a string that can be shared openly with anyone.
- It acts like your "account number" on the blockchain.
- **Example:** Ethereum Address on Etherscan

### Private Key
- The private key is a secret string that must be kept confidential.
- It is used to sign transactions and prove ownership of the associated public key.
- **Important:** Never share your private key with anyone.
---
## Bits and Bytes

### Why Learn This?
- Private keys are stored in a certain format, whenever you use them or generate them.
- They are stored/generated in bits and bytes.
- Understanding bits, bytes, and various encoding-decoding techniques helps when dealing with private keys.

### What is a Bit?
- A bit is the smallest unit of data in a computer.
- It can have one of two values: 0 or 1.
- All programs and code you write are eventually converted to 0's and 1's.

#### Analogy
Think of a bit like a light switch that can either be off (0) or on (1).

#### Bit Representation in JavaScript
```javascript
const x = 0;
console.log(x); // Outputs: 0
```

### What is a Byte?
- A byte is a group of 8 bits.
- It’s the standard unit of data used to represent a single character in memory.

#### Possible Values
- Since each bit can be either 0 or 1, a byte can have 2^8 (256) possible values, ranging from 0 to 255.
- **Example:** The binary sequence `11001010` represents a specific value in decimal.

#### Byte Representation
```javascript
const x = 202;
console.log(x); // Outputs: 202
```

#### Array of Bytes
```javascript
const bytes = [202, 244, 1, 23];
console.log(bytes); // Outputs: [202, 244, 1, 23]
```
This is an array containing multiple bytes.

### Using UInt8Array in JavaScript

#### Definition
`UInt8Array` is a typed array in JavaScript that represents an array of 8-bit unsigned integers (bytes).

#### Advantages
- **Memory Efficiency:** Uses less space; each value takes only 1 byte.
- **Constraints:** Ensures that values don’t exceed 255, which is the maximum value a byte can hold.

#### Example
```javascript
let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes); // Outputs: Uint8Array(4) [ 0, 255, 127, 128 ]
```
This code creates a UInt8Array with four bytes, ensuring that each value stays within the valid byte range.

#### Example
```javascript
const binaryRepresentation = new TextEncoder().encode("h");
console.log(binaryRepresentation); // Uint8Array(1)[104]
```

### Why Use UInt8Array Over Native Arrays?

#### Memory Efficiency
- Native arrays in JavaScript store numbers using 64 bits (8 bytes) per number, regardless of the actual size of the number.
- `UInt8Array` stores each number using only 1 byte, which is sufficient for values between 0 and 255.

#### Constraints
- `UInt8Array` enforces that each element doesn’t exceed 255, preventing potential overflow errors.

## Encodings
When working with computers, data is often represented in a format that is not human-readable, such as binary or bytes. Encoding is the process of converting this data into a more readable format. Common encodings include:
- ASCII
- Hex
- Base64
- Base58

These encodings help us represent binary data in a more understandable way.

### ASCII (American Standard Code for Information Interchange)
- **1 character = 7 bits**
- ASCII is one of the oldest encodings used to represent text in computers.
- Each character in ASCII corresponds to a specific number (ranging from 0 to 127), which is represented in binary.

#### Example
- The letter 'A' is represented by the number 65 in ASCII, which is `01000001` in binary.

### Hexadecimal (Hex)
- **1 character = 4 bits**
- Hexadecimal is a base-16 encoding system that uses 16 characters: 0-9 and A-F.
- Commonly used in programming and digital systems to represent binary data in a more compact and readable format.
- Each hex digit represents four bits (a nibble), and two hex digits represent one byte.

### Base64
- **1 character = 6 bits**
- Base64 is an encoding scheme that represents binary data in an ASCII string format.
- It uses 64 different characters (A-Z, a-z, 0-9, +, /).
- Commonly used in data transfer, encoding images, and storing complex data as text.

### Base58
- Similar to Base64 but uses a different set of characters to avoid visually similar characters (e.g., 0 and O, l and 1).
- Often used in Bitcoin and other cryptocurrencies for encoding addresses and other data.

## Hashing vs Encryption

### Hashing
- Converts data into a fixed-size string of characters, known as a hash.

#### Key Points
- **Deterministic:** The same input will always produce the same hash.
- **Fixed Size:** Regardless of the input size, the output hash will always be the same length.
- **One-Way Function:** Hashes cannot be reversed to retrieve the original input data.
- **Collision Resistance:** It is computationally difficult to find two different inputs that produce the same hash.

#### Common Hashing Algorithms
- **SHA-256:** Widely used in blockchain technology, ensuring data integrity.
- **MD5:** Once popular for checksums, now considered insecure due to vulnerabilities.

### Encryption
- Converts plaintext into ciphertext using an algorithm and a key.

#### Key Points
- **Reversible:** With the correct key, the ciphertext can be decrypted back to plaintext.
- **Key-Dependent:** The security of encryption relies on the secrecy of the key.

#### Types of Encryption

##### 1. Symmetric Encryption
- **Definition:** The same key is used for both encryption and decryption.

**Common Algorithms:**
- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard)

##### 2. Asymmetric Encryption
- **Definition:** Uses a pair of keys – a public key and a private key – for encryption and decryption.

###### Key Pair
- **Public Key:** Can be shared openly and is used to encrypt data.
- **Private Key:** Must be kept confidential and is used to decrypt data encrypted with the corresponding public key.

###### Common Algorithms
- **RSA (Rivest–Shamir–Adleman)**
- **ECC (Elliptic Curve Cryptography):** Used by Ethereum and Bitcoin.
- **EdDSA (Edwards-curve Digital Signature Algorithm):** Used by Solana.

###### Common Elliptic Curves
- **secp256k1:** Used in Bitcoin (BTC) and Ethereum (ETH).
- **ed25519:** Used in Solana (SOL).

## Use Cases of Public-Key Cryptography
- **SSL/TLS Certificates:** Ensuring secure communication over the internet.
- **SSH Keys:** For secure server access or pushing code to GitHub.
- **Blockchains and Cryptocurrencies:** Ensuring secure and verifiable transactions.

## Creating a Public/Private Keypair
1. Create a public-private keypair.
2. Define a message to sign.
3. Convert the message to a `UInt8Array`.
4. Sign the message using the private key.
5. Verify the message using the public key.

## How Do Transactions Work on the Blockchain?

### User Side
1. User creates a public/private keypair.
2. They create a transaction (e.g., send Rs 50 to Alice). The transaction includes details like the recipient's address, amount, and blockchain-specific parameters (e.g., `latestBlockHash` in Solana).
3. They hash the transaction.
4. They sign the transaction using their private key.
5. They send the raw transaction, signature, and public key to a node on the blockchain.

### Miner
1. Hashes the original message to generate a hash.
2. Verifies the signature using the user's public key and the generated hash.
3. Validates the transaction (e.g., checks sufficient funds).
4. If everything checks out, adds the transaction to the block.
