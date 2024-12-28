function asciiToBytes(asciiString){
    const byteArray = [];
    for(let i=0; i<asciiString.length; i++){
        byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
}

const ascii = "Gaurav";
const byteArray = asciiToBytes(ascii);
console.log(byteArray);
