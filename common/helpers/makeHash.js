const CryptoJS = require('cryptojs').Crypto;

module.exports = payload => {
    return CryptoJS.MD5(payload);
}