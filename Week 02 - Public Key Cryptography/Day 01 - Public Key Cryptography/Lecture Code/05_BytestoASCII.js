function bytesToASCII(byteArray){
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
}
const bytes = [71, 97, 117, 114, 97, 118];
const asciiToString = bytesToASCII(bytes);
console.log(asciiToString); 
