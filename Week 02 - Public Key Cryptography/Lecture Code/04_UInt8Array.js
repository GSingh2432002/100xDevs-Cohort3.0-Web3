let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes);
console.log(Array.from(bytes).map(byte => byte
    .toString(2) // Converts a number into its binary representation as a string. he toString method takes a parameter called the radix (base) to specify the number system. 2 is the radix for binary, so .toString(2) converts the number into base 2(Binary).
    .padStart(8, '0'))); // .padStart(8, '0') Purpose: Ensures that the binary string has exactly 8 characters by adding leading zeroes if necessary. Why 8 Characters? A byte consists of 8 bits, so this ensures the binary representation is formatted correctly as an 8-bit number. How it works: padStart takes two arguments: Target length (e.g., 8): The total length of the resulting string. Padding character (e.g., '0'): The character to use for padding.
