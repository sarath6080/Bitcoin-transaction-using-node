var bitcore = require('bitcore-lib');
//using privatekey
//var privateKeyWIF = 'cURCUZ8C5cG5WJZ1ML9zexfu93riPh6LU98DwDx5fH4jkM32931P';
//var privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF);
//var address = privateKey.toAddress();
//console.log('address:',address);


// using mnemonic code
// var value = new Buffer('describe student aspect weekend purse school nasty machine goose tuna wine extra');
// var hash = bitcore.crypto.Hash.sha256(value);
// var bn = bitcore.crypto.BN.fromBuffer(hash);
// var toaddr = new bitcore.PrivateKey(bn,'testnet').toAddress();
// var pkey = new bitcore.PrivateKey(bn,'testnet').toWIF();
// console.log('toaddress',toaddr);
// console.log('private key',pkey);

//Exploring the transaction
var Insight = require('bitcore-explorers').Insight;
var insight = new Insight('testnet');

insight.getUnspentUtxos('moewE7ig25w7KrgfwhbC767nSC1UqTzsTh', function(err,utxos){
    if (err){
        //error
    } else {
        //use utxos to create transaction
        console.log(utxos)
        var tx = bitcore.Transaction();
        tx.from(utxos);
        tx.to('mqLWeekYxyNjLP2HNBodVbFojdQcektA9i', 10000) //0.0001
        tx.change('moewE7ig25w7KrgfwhbC767nSC1UqTzsTh');
        tx.fee(50000)
        tx.sign('cURCUZ8C5cG5WJZ1ML9zexfu93riPh6LU98DwDx5fH4jkM32931P');
       
        console.log('transaction');
        console.log(tx.toObject());
        tx.serialize();

        // broadcast
        insight.broadcast(tx, function(err, returnedTxId){
            if (err) {
                console.log(err);
            }else{
                console.log('successful broadcast', + returnedTxId);
            }

        })
    }
});