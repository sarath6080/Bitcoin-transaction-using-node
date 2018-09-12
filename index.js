
var bitcoin = require("bitcoinjs-lib")
//Require bitcoinjs-lib.

var keyPair = bitcoin.ECPair.makeRandom();
//Make variable for keyPair.i

console.log(keyPair.getAddress());
//Test address by logging address to console. A valid bitcoin address should be returned.

var address = keyPair.getAddress();
//Save bitcoin address result to a variable.

console.log(keyPair.toWif());
//Test private key by logging to console. A valid bitcoin private key should be returned.

var pkey = keyPair.toWIF();