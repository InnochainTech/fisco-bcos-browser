let web3Utils = require("web3-utils");
let gm = require('./SM2Sign')

let utils = web3Utils
utils.sha4 = function (value) {
    value = new Buffer(value);
    let _digstData = gm.sm3Digest(value);
    let digstData = new Buffer(_digstData, 'hex').toString('hex');
    console.log("SM3digstData:",_digstData);
    return digstData;
}
module.exports = utils

