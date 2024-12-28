function bytesToASCII(byteArray){
    return new TextDecoder().decode(byteArray);
}

const bytes = new Uint8Array([0, 255, 127, 128]);
const asciiString = bytesToASCII(bytes);
console.log(asciiString);
