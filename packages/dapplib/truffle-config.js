require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski strategy dash ridge unfair harvest crime front split'; 
let testAccounts = [
"0xbf02fc528a50a83efad70d7d03bb0fd3544eedc01303af20d3773b6f6183e1b4",
"0x516acd3d88502b87a741b9644549b394ba250cc7677a330a2ed93461ff3144c3",
"0x5e792139c5bea77cf99326a0b276b63ba2643706c75ae145f5bf8ffa82613def",
"0xa2ee967918cec5ce7da9c23acf575bc62f90672bb3fe16fb5eded0dc2c442917",
"0xc33d298759f6d40866a8ef6f4b14b779bf4613dc591838d517d029865fe88286",
"0x1d237b346c0825001b78ddae63f0b8c2656e0026485b6c788c44cfe62602466c",
"0xc7666dec281eb4ad722862e9c74f1720938a555bc4dd1946863961c6bc58275a",
"0xf04951c0b8bd18ee285f88e5280d5314134e2d0ee6e4a640bae7f5847ce5a8e5",
"0xdda7e9b0dc30488d02c7c2ec52424a7489250440b4a3ee78318565bcb8cbf538",
"0x443d7e4488e55f6216b38ffda956eeeb03921063e5f7af55b9975ab4d91ad580"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


