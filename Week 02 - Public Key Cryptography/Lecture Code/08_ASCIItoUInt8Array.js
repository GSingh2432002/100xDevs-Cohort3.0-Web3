function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}
const ascii = "Gaurav";
const byteArray = asciiToBytes(ascii);
console.log(byteArray);
