# What is Keccak-256?

Keccak-256 is a cryptographic hash function that is part of the Keccak family of algorithms. It serves as the foundation of the SHA-3 (Secure Hash Algorithm 3) standard.

## Key Features

### Hash Function
- Keccak-256 takes an input message (of any length) and produces a fixed-length output of 256 bits (32 bytes).
- The output is deterministic, meaning the same input will always produce the same hash.

### Sponge Construction
- Keccak uses a unique sponge construction algorithm.
- It absorbs the input message into an internal state and then squeezes the state to produce the hash output.
- The state is updated in "rounds" using a permutation function.

### Security
- Keccak-256 is resistant to known cryptographic attacks like collision attacks (where two different inputs produce the same hash) and pre-image attacks (finding an input that matches a given hash).

### Performance
- It offers high performance on a variety of hardware platforms, including constrained devices.

## Usage

### Blockchain
Keccak-256 is used in Ethereum to compute cryptographic hashes for:
- Address generation.
- Hashing transactions.
- Smart contract computations.

### Data Integrity
- It ensures that data has not been tampered with by comparing hash values.

### Digital Signatures
- Hashing is a critical step in generating and verifying digital signatures.

#### When generating the `public key` for an ETH address:
1. A public key is generated using elliptic curve cryptography.
2. The public key is then hashed using the Keccak-256 algorithm.
3. After hashing the public key with Keccak-256, you get a 32-byte hash. The Ethereum address is derived from this hash by taking only the last 20 bytes of the hash output.
4. The resulting 20-byte value is then converted into hexadecimal format and prefixed with `0x` to form the Ethereum address. This is the address that users use to send and receive ETH and interact with smart contracts.

> **Note:**  
> In Solana, public keys are 32 bytes (e.g., `5W4oGgDHqir3KNEcmiMn6tNHmbWjC7PgW11sk4AwWbpe`) with no need for hashing or chopping.

---

# What is RPC?

RPC (Remote Procedure Call) is a protocol that enables a program to execute a procedure (or function) on a remote server as if it were a local procedure.

## Key Features of RPC

### Transparency
- The client doesn't need to know the internal details of the remote server; it simply calls the function.
- The complexity of communication (e.g., network transport) is abstracted.

### Synchronous/Asynchronous
- RPC can be synchronous (blocking) or asynchronous (non-blocking).

### Versatility
- It can work with various transport protocols like TCP, HTTP, or message queues.

### Language Agnostic
- RPC implementations often work across different programming languages.

## How RPC Works
1. The client sends a request with the function name and arguments to the server.
2. The server executes the function and sends the result back to the client.

---

# What is JSON-RPC?

JSON-RPC is a remote procedure call (RPC) protocol encoded in JSON (JavaScript Object Notation). It allows for communication between a client and a server over a network. JSON-RPC enables a client to invoke methods on a server and receive responses, similar to traditional RPC protocols but using JSON for data formatting.

## Key Features of JSON-RPC

### JSON Encoding
- Both requests and responses are serialized in JSON format.

### Transport Agnostic
- JSON-RPC can operate over HTTP, WebSockets, TCP, or other transport mechanisms.

### Method Invocation
- The client specifies the method name and parameters in the JSON request.

### Bidirectional Communication
- It supports notifications (one-way messages) and requests with responses.

### Example Code
```json
{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0xAddressHere", "latest"],
  "id": 1
}
```

# What is RPC Server?

RPC stands for Remote Procedure Call. It allows external clients to interact with the blockchain network. An RPC server is a service that listens for JSON-RPC requests from clients, processes these requests, and returns the results. It acts as an intermediary between the blockchain and external applications.

## Key Features of RPC Server
- **Scalability**: It is easy to scale an RPC server.
- **Best Practice**: Typically, it's best to use an RPC server, but it's also possible to create your own—though this approach is generally not recommended.
- **Consensus**: An RPC server does not participate in staking or consensus mechanisms.

---

# What is Wei?

Wei is the smallest unit of cryptocurrency in the Ethereum network. It's similar to how a cent is to a dollar. 

- **Value**: 1 Ether (ETH) = \(10^{18}\) Wei.

---

# What is Gwei?

Gwei is a larger unit of Ether commonly used in the context of gas prices.

- **Conversion**: 1 Ether = \(10^9\) Gwei.

---

# What is Lamports?

In the Solana blockchain, the smallest unit of currency is called a lamport. Just as Wei is to Ether in Ethereum, lamports are to SOL (the native token of Solana).

- **Value**: 1 SOL = \(10^9\) Lamports.
