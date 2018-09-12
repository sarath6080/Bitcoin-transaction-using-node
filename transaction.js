const Client = require('bitcoin-core');
const client = new Client({ network: 'regtest' });
//const client = new Client({ port: 28332 });
client.getInfo().then((help) => console.log(help));