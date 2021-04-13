require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot filter dash remember comic coral light army gauge'; 
let testAccounts = [
"0x58d329c6cdddd934db534f8639714d202eb66b0f129f45d7da89265d5fb14fb2",
"0x5a2bac88a198f340b5f1ae5cbd9eb512157141625db1decf4c7e6d9a6963b276",
"0x3a249df4d6626f3f05b17da24105fce6f561656c3c32a27f56f2d7ce1c63092a",
"0x0c544f25acc579e7d2a9cff52fb8d43a53f490345086ce77cbcf2424a333d03d",
"0x34e7950abbecef4eff0a0780c1addffa8bb792ade7c4903fab25b8be0f9731c9",
"0xa0f07681a3ad25bb1d423be2604e3ab682c1604c8bf0513ae967aa0823c207ca",
"0xa066075e2ff063fd1da3c517eb60433f313358a427d6a031d3a20cf2091e4a82",
"0x51ec177bdd90f2a25e81c69ed3818a74d9fd1d3aaf87a0f85dc371160843980b",
"0x51d72ceb64dbd1a62db51a2c965b08201c2fb7d46a3cad92b491ce7c4bcf67f8",
"0xa15b36235abb29b05badd1d1fba0306957ac96ea5e03f32c48732fb4ff224234"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
